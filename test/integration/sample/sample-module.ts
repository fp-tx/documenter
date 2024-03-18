/* eslint-disable @typescript-eslint/prefer-readonly */
// ------------------------------------------------------------------
// An integration / regression snapshot test for markdown output
// ------------------------------------------------------------------

/**
 * A tagged union type
 *
 * ```typescript
 * type Tagged = { _tag: 'foo' } | { _tag: 'bar' }
 * ```
 *
 * @remarks
 * Tagged unions are a powerful way to represent a finite set of possible values. They are often
 * used to represent the state of a system or a set of actions that can be performed.
 *
 * Here's an example of the Option tagged union
 *
 * ```typescript
 * type Option<A> = { _tag: 'None' } | { _tag: 'Some'; value: A }
 *
 * const none: Option<number> = { _tag: 'none' }
 * const some: Option<number> = { _tag: 'some', value: 42 }
 * ```
 * @example
 *
 * ```typescript
 * const foo: Tagged = { _tag: 'foo' }
 * const bar: Tagged = { _tag: 'bar' }
 * ```
 *
 * @public
 * @meta
 * {@since 1.0.0}
 * {@category Types}
 */
export type Option<A> = { readonly _tag: 'Some'; some: A } | { readonly _tag: 'None' }

/**
 * A sample interface
 *
 * @public
 * @meta
 * {@since 1.0.0}
 */
export interface SampleInterface {
  /**
   * Note: documentation for interface properties is not currently supported
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  readonly value: number
}

/**
 * A sample variable export
 *
 * @public
 * @meta
 * {@since 1.0.0}
 * {@category Variables}
 */
export const variableExport: Option<number> = { _tag: 'Some', some: 42 }

/**
 * A sample function export
 *
 * @public
 * @meta
 * {@since 1.0.0}
 * {@category Functions}
 */
export function functionExport(a: number, b: number): number {
  return a + b
}

/**
 * A sample sub-class
 *
 * @public
 * @meta
 * {@since 1.0.0}
 */
export class SubClass {
  constructor(readonly who: string) {}
}

/**
 * A sample class export
 *
 * @public
 * @meta
 * {@since 1.0.0}
 * {@category Classes}
 */
export class SampleClass extends SubClass implements SampleInterface {
  #superPrivate: number = 42

  /**
   * A static field
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  public static staticField: number = 42

  /**
   * A protected static field
   *
   * @meta
   * {@since 1.0.0}
   */
  protected static protectedStaticField: number = 42

  /**
   * A private static field
   *
   * @remarks
   * This should not be included in the documentation
   * @meta
   * {@since 1.0.0}
   */
  // @ts-expect-error - unused
  private static privateStaticField: number = 42

  constructor(
    /**
     * A public readonly field
     *
     * @public
     * @meta
     * {@since 1.0.0}
     */
    public readonly value: number,
    /**
     * A protected mutable field
     *
     * @meta
     * {@since 1.0.0}
     */
    protected mutableField: number,
  ) {
    super('me')
  }

  /**
   * A public method
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  public publicFn(): number {
    return this.value
  }

  /**
   * A protected method
   *
   * @meta
   * {@since 1.0.0}
   */
  protected protectedFn(): number {
    return this.value
  }

  /**
   * A private method
   *
   * @remarks
   * This should not be included in the documentation
   * @meta
   * {@since 1.0.0}
   */
  // @ts-expect-error - unused
  private privateFn(): number {
    return this.value
  }

  /**
   * A public field
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  public publicField: number = 42

  /**
   * A protected field
   *
   * @meta
   * {@since 1.0.0}
   */
  protected protectedField: number = 42

  /**
   * A private field
   *
   * @remarks
   * This should not be included in the documentation
   * @meta
   * {@since 1.0.0}
   */
  // @ts-expect-error - unused
  private readonly privateField: number = 42

  /**
   * A public getter
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  public get superPrivate(): number {
    return this.#superPrivate
  }

  /**
   * A public setter
   *
   * @public
   * @meta
   * {@since 1.0.0}
   */
  public set superPrivate(value: number) {
    this.#superPrivate = value
  }
}
