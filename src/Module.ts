import { option as O } from '@fp-tx/core'

/**
 * Adds an exclamation mark to the end of a string.
 *
 * @remarks
 * Since 0.1.0
 * @public
 */
export const exclaimOptional: (optionString: O.Option<string>) => O.Option<string> = O.map(
  s => s + '!',
)
