import { flow, pipe } from '@fp-tx/core/function'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as TE from '@fp-tx/core/TaskEither'
import prettier, { type Options as PrettierOptions } from 'prettier'

/**
 * A dependency injected configuration for prettier
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Config}
 */
export interface PrettierConfig {
  readonly prettierOptions: PrettierOptions
}

/**
 * Formats the given code using prettier
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Effects}
 */
export const formatCode: (
  code: string,
) => RTE.ReaderTaskEither<PrettierConfig, never, string> = code =>
  pipe(
    RTE.ask<PrettierConfig>(),
    RTE.flatMapTaskEither(
      flow(
        TE.tryCatchK(
          ({ prettierOptions }) =>
            prettier.format(code, { parser: 'typescript', ...prettierOptions }),
          () => null,
        ),
        TE.orElseW(() => TE.right(code)),
      ),
    ),
  )
