import { flow, pipe } from '@fp-tx/core/function'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as TE from '@fp-tx/core/TaskEither'
import fs from 'fs'

const FileServiceSymbol = Symbol('FileService')

/**
 * Represents a file service error
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Errors}
 */
export class FileServiceError extends Error {
  override readonly name = 'FileServiceError'
  constructor(readonly Error: Error) {
    super(Error.message)
  }
  static readonly of: (Error: Error) => FileServiceError = Error => new FileServiceError(Error)
}

type FileServiceMethods = {
  readonly writeFile: (
    path: fs.PathLike,
    content: string,
    options?: fs.WriteFileOptions,
  ) => TE.TaskEither<FileServiceError, void>
  readonly mkdir: (
    path: fs.PathLike,
    options?: fs.MakeDirectoryOptions,
  ) => TE.TaskEither<FileServiceError, void>
}

/**
 * Represents a minimal file service for the purpose of fp-tx/documenter
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Services}
 */
export class FileService {
  [FileServiceSymbol]: FileServiceMethods
  constructor(fileServiceMethods: FileServiceMethods) {
    this[FileServiceSymbol] = fileServiceMethods
  }
}

const writeFile_: (
  path: fs.PathLike,
  content: string,
  options: fs.WriteFileOptions,
) => TE.TaskEither<FileServiceError, void> = flow(
  TE.taskify(
    (
      path: fs.PathLike,
      content: string,
      options: fs.WriteFileOptions,
      callback: (err: null | Error) => void,
    ) => fs.writeFile(path, content, options, callback),
  ),
  TE.mapLeft(FileServiceError.of),
  TE.asUnit,
)

const mkdir_: (
  path: fs.PathLike,
  options?: fs.MakeDirectoryOptions,
) => TE.TaskEither<FileServiceError, void> = flow(
  TE.taskify(fs.mkdir),
  TE.mapLeft(FileServiceError.of),
  TE.asUnit,
)

/**
 * A node-based implementation of the file service
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Providers}
 */
export const FileServiceLive: FileService = new FileService({
  writeFile: (path, content, options = 'utf8') => writeFile_(path, content, options),
  mkdir: (path, options) => mkdir_(path, options),
})

/**
 * Writes a file to the file system
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const writeFile: (
  path: fs.PathLike,
  content: string,
  options?: fs.WriteFileOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void> = (path, content, options) =>
  pipe(
    RTE.ask<FileService>(),
    RTE.flatMapTaskEither(service => service[FileServiceSymbol].writeFile(path, content, options)),
  )

/**
 * Creates a directory in the file system
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const mkdir: (
  path: fs.PathLike,
  options?: fs.MakeDirectoryOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void> = (path, options) =>
  pipe(
    RTE.ask<FileService>(),
    RTE.flatMapTaskEither(service => service[FileServiceSymbol].mkdir(path, options)),
  )

/**
 * Creates a directory in the file system if it does not exist
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const upsertDir: (
  path: fs.PathLike,
  options?: fs.MakeDirectoryOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void> = (path, options) =>
  pipe(
    mkdir(path, options),
    RTE.orElseW(() => RTE.right(void 0)),
  )
