import * as Apl from '@fp-tx/core/Applicative'
import * as E from '@fp-tx/core/Either'
import { pipe, tuple } from '@fp-tx/core/function'
import * as Mn from '@fp-tx/core/Monoid'
import * as O from '@fp-tx/core/Option'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as Sg from '@fp-tx/core/Semigroup'
import path from 'path'

import * as FileService from './FileService'
import type * as Md from './Markdown'

// -------------------------------------------------------------------------------------
// models and constructors
// -------------------------------------------------------------------------------------

/**
 * Represents the generated markdown output
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export type MarkdownFiles = Folder | File

/**
 * Represents a folder in the file system.
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Folder {
  readonly _tag: 'Folder'
  /** The name of the folder. */
  readonly name: string
  /** The files and subfolders contained in this folder. */
  readonly contents: ReadonlyArray<MarkdownFiles>
}

/**
 * Constructs a folder.
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const folder = (name: string, contents: ReadonlyArray<Folder | File>): MarkdownFiles => ({
  _tag: 'Folder',
  name,
  contents,
})

/**
 * Represents a file in the file system.
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface File {
  readonly _tag: 'File'
  /** The name of the file. */
  readonly name: string
  /** The content of the file. */
  readonly content: Md.Markdown
}

/**
 * Constructs a file.
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const file = (name: string, content: Md.Markdown): MarkdownFiles => ({
  _tag: 'File',
  name,
  content,
})

// -------------------------------------------------------------------------------------
// effects
// -------------------------------------------------------------------------------------

/**
 * Outputs the markdown output to the file system
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const saveMarkdownOutput =
  (markdownCompiler: (markdown: Md.Markdown) => string) =>
  (outputFolder: string) =>
  (
    output: MarkdownFiles,
  ): RTE.ReaderTaskEither<FileService.FileService, FileService.FileServiceError, void> => {
    type RecursionQueue = {
      readonly queue: ReadonlyArray<readonly [currentPath: string, file: string, content: string]>
      readonly next: O.Option<readonly [dirPath: string, items: ReadonlyArray<MarkdownFiles>]>
    }

    const RecursionQueueRTEMonoid: Mn.Monoid<
      RTE.ReaderTaskEither<FileService.FileService, FileService.FileServiceError, RecursionQueue>
    > = Apl.getApplicativeMonoid(RTE.ApplicativePar)(
      Mn.struct({
        queue: RA.getMonoid(),
        next: O.getMonoid(Sg.tuple(Sg.first(), RA.getSemigroup())),
      }),
    )

    const go = ({
      queue,
      next,
    }: RecursionQueue): RTE.ReaderTaskEither<
      FileService.FileService,
      FileService.FileServiceError,
      E.Either<RecursionQueue, void>
    > =>
      pipe(
        queue,
        RTE.traverseArray(([currentBase, file, content]) =>
          FileService.writeFile(path.join(currentBase, file), content),
        ),
        RTE.flatMap(
          (): RTE.ReaderTaskEither<
            FileService.FileService,
            FileService.FileServiceError,
            E.Either<RecursionQueue, void>
          > =>
            pipe(
              next,
              O.flatMap(traverseSndO(RNEA.fromReadonlyArray)),
              O.match(
                () => RTE.right(E.right(void 0)),
                ([dirPath, items]) =>
                  pipe(
                    items,
                    RNEA.foldMap(RecursionQueueRTEMonoid)(output =>
                      output._tag === 'File' ?
                        RTE.right({
                          queue: RA.of(
                            tuple(
                              dirPath,
                              output.name.includes('.md') ? output.name : `${output.name}.md`,
                              markdownCompiler(output.content),
                            ),
                          ),
                          next: O.none,
                        })
                      : pipe(
                          FileService.upsertDir(path.join(dirPath, output.name), {
                            recursive: true,
                          }),
                          RTE.as({
                            queue: [],
                            next: O.some(tuple(path.join(dirPath, output.name), output.contents)),
                          }),
                        ),
                    ),
                    RTE.map(E.left),
                  ),
              ),
            ),
        ),
      )

    return RTE.chainRec(
      {
        queue: [],
        next: O.some(tuple(outputFolder, [output])),
      },
      go,
    )
  }

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

// TODO: add Bifoldable/Bitraverse to @fp-tx/core
const traverseSndO =
  <A, B, C>(f: (b: B) => O.Option<C>) =>
  ([a, b]: readonly [A, B]): O.Option<readonly [A, C]> =>
    pipe(
      f(b),
      O.map(c => tuple(a, c)),
    )
