import { pipe } from '@fp-tx/core/function'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as TE from '@fp-tx/core/TaskEither'
import { ApiModel } from '@microsoft/api-extractor-model'

import * as ApiTraversal from './ApiTraversal'
import type * as FileService from './FileService'
import * as Markdown from './Markdown'
import * as MarkdownFiles from './MarkdownFiles'
import type * as Prettier from './Prettier'

/**
 * Represents an error which occurs when extracting the API package
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Errors}
 */
export class DocumentationError extends Error {
  override readonly name = 'DocumentationError'
  constructor(
    readonly context: string,
    error: unknown,
  ) {
    super(`Failed to extract the API package; ${error}`)
  }
}

/**
 * Extracts the API package and saves the markdown files to the output folder
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const extractApiPackage = (
  apiPath: string,
  outputFolder: string,
): RTE.ReaderTaskEither<
  FileService.FileService & Prettier.PrettierConfig,
  FileService.FileServiceError | DocumentationError,
  void
> =>
  pipe(
    new ApiModel(),
    RTE.fromTaskEitherK(
      TE.tryCatchK(
        async apiModel => apiModel.loadPackage(apiPath),
        err => new DocumentationError('Failed to load package using ApiModel.loadPackage', err),
      ),
    ),
    RTE.flatMap(ApiTraversal.extractMarkdownFiles),
    RTE.flatMap(
      RTE.traverseArray(
        MarkdownFiles.saveMarkdownOutput(Markdown.renderToString('\n'))(outputFolder),
      ),
    ),
    RTE.asUnit,
  )
