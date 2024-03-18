import * as Api from './Api'
import * as ApiTraversal from './ApiTraversal'
import * as Documenter from './Documenter'
import * as FileService from './FileService'
import * as Markdown from './Markdown'
import * as MarkdownFiles from './MarkdownFiles'
import * as Prettier from './Prettier'

export {
  /**
   * A representation of the API items that are part of a namespace
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  Api,
  /**
   * Traverses the parsed API items from api-documenter and returns a tree of markdown emissions
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  ApiTraversal,
  /**
   * The primary export of fp-tx/documenter which parses and emits markdown documentation
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  Documenter,
  /**
   * A minimal implementation of the file service for the purpose of fp-tx/documenter
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  FileService,
  /**
   * An ADT representation of markdown content. Inspired by the `Markdown` module of `docs-ts`
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  Markdown,
  /**
   * A rose tree representation of the markdown file and folder output
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  MarkdownFiles,
  /**
   * A module for formatting code using prettier
   *
   * @public
   * @meta
   * {@since 0.1.0}
   */
  Prettier,
}
