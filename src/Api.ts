import * as Ap from '@fp-tx/core/Apply'
import { flow, identity, pipe, tuple } from '@fp-tx/core/function'
import * as Mn from '@fp-tx/core/Monoid'
import * as O from '@fp-tx/core/Option'
import * as Ord from '@fp-tx/core/Ord'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as Sg from '@fp-tx/core/Semigroup'
import * as Str from '@fp-tx/core/string'

import * as Md from './Markdown.js'
import * as Prettier from './Prettier.js'

// -------------------------------------------------------------------------------------
// models
// -------------------------------------------------------------------------------------

/**
 * Common documentable item properties
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface DocumentableItem {
  readonly name: string
  readonly category: O.Option<string>
  readonly since: O.Option<string>
  readonly deprecationSchedule: O.Option<string>
  readonly removalSchedule: O.Option<string>
  readonly summary: O.Option<string>
  readonly examples: O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>
  readonly licenses: O.Option<RNEA.ReadonlyNonEmptyArray<string>>
  readonly deprecated: boolean
  readonly releaseTag: 'public' | 'beta' | 'alpha'
  readonly remarks: O.Option<string>
}

/**
 * A default documentable item
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const defaultDocumentableItem = (name: string): DocumentableItem => ({
  category: O.none,
  since: O.none,
  deprecationSchedule: O.none,
  removalSchedule: O.none,
  deprecated: false,
  licenses: O.none,
  name,
  releaseTag: 'public',
  remarks: O.none,
  summary: O.none,
  examples: O.none,
})

/**
 * A union of all API items
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export type ApiItem = Interface | Function | TypeAlias | Variable | Class

/**
 * Represents an interface
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Interface extends DocumentableItem {
  readonly _tag: 'Interface'
  readonly signatureExcerpt: string
  readonly childExcerpts: ReadonlyArray<string>
}

const interface_: (
  name: string,
  signatureExcerpt: string,
  childExcerpts: ReadonlyArray<string>,
  config?: Partial<DocumentableItem>,
) => Interface = (name, signatureExcerpt, childExcerpts, config) => ({
  _tag: 'Interface',
  signatureExcerpt,
  childExcerpts,
  ...defaultDocumentableItem(name),
  ...config,
})

export {
  /**
   * Represents an interface
   *
   * @public
   * @meta
   * {@since 0.1.0}
   * {@category Constructors}
   */
  interface_ as interface,
}

/**
 * Represents a function
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Function extends DocumentableItem {
  readonly _tag: 'Function'
  readonly overloadExcerpts: ReadonlyArray<string>
}

const function_: (
  name: string,
  overloadExcerpts: ReadonlyArray<string>,
  config?: Partial<DocumentableItem>,
) => Function = (name, overloadExcerpts, config) => ({
  _tag: 'Function',
  overloadExcerpts,
  ...defaultDocumentableItem(name),
  ...config,
})

export {
  /**
   * Represents a function export
   *
   * @public
   * @meta
   * {@since 0.1.0}
   * {@category Constructors}
   */
  function_ as function,
}

/**
 * Represents a type alias
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface TypeAlias extends DocumentableItem {
  readonly _tag: 'TypeAlias'
  readonly signatureExcerpt: string
}

/**
 * Represents an exported type alias
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const typeAlias = (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
): TypeAlias => ({
  _tag: 'TypeAlias',
  signatureExcerpt,
  ...defaultDocumentableItem(name),
  ...config,
})

/**
 * Represents an exported variable
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Variable extends DocumentableItem {
  readonly _tag: 'Variable'
  readonly signatureExcerpt: string
}

/**
 * Represents an exported variable
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const variable = (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
): Variable => ({
  _tag: 'Variable',
  signatureExcerpt,
  ...defaultDocumentableItem(name),
  ...config,
})

/**
 * Represents a class property or method
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface ClassMember extends DocumentableItem {
  readonly _tag: 'ClassProperty'
  readonly isProtected: boolean
  readonly signatureExcerpt: string
  readonly type: 'property' | 'method'
}

/**
 * Represents a class property
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const classProperty = (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
): ClassMember => ({
  _tag: 'ClassProperty',
  signatureExcerpt,
  isProtected: false,
  type: 'property',
  ...defaultDocumentableItem(name),
  ...config,
})

/**
 * Represents a class method
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const classMethod = (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
): ClassMember => ({
  _tag: 'ClassProperty',
  signatureExcerpt,
  isProtected: false,
  type: 'method',
  ...defaultDocumentableItem(name),
  ...config,
})

/**
 * Represents a class
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Class extends DocumentableItem {
  readonly _tag: 'Class'
  readonly members: ReadonlyArray<ClassMember>
  readonly constructorExcerpt: O.Option<string>
  readonly signatureExcerpt: string
}

const class_: (
  name: string,
  signatureExcerpt: string,
  members: ReadonlyArray<ClassMember>,
  config?: Partial<DocumentableItem>,
) => Class = (name, signatureExcerpt, members, config) => ({
  _tag: 'Class',
  members,
  signatureExcerpt,
  constructorExcerpt: O.none,
  ...defaultDocumentableItem(name),
  ...config,
})

export {
  /**
   * Represents a class
   *
   * @public
   * @meta
   * {@since 0.1.0}
   * {@category Constructors}
   */
  class_ as class,
}

/**
 * A collection of documentation items for a single module
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Module {
  readonly interfaces: ReadonlyArray<Interface>
  readonly typeAliases: ReadonlyArray<TypeAlias>
  readonly moduleExports: ReadonlyArray<Function | Variable | Class>
}

/**
 * Represents a collection of documentation exports for a single module
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const module = (
  interfaces: ReadonlyArray<Interface>,
  typeAliases: ReadonlyArray<TypeAlias>,
  moduleExports: ReadonlyArray<Function | Variable | Class>,
): Module => ({
  interfaces,
  typeAliases,
  moduleExports,
})

/**
 * A named module
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface NamedModule extends Module, DocumentableItem {}

/**
 * Represents a named module
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const namedModule = (
  name: string,
  modules: Partial<Module> = {},
  config: Partial<DocumentableItem> = {},
): NamedModule => ({
  ...module(modules.interfaces ?? [], modules.typeAliases ?? [], modules.moduleExports ?? []),
  ...defaultDocumentableItem(name),
  ...config,
})

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * A monoid for `Module`
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 */
export const MonoidModule: Mn.Monoid<Module> = Mn.struct({
  interfaces: RA.getMonoid(),
  typeAliases: RA.getMonoid(),
  moduleExports: RA.getMonoid(),
})

// -------------------------------------------------------------------------------------
// renderers
// -------------------------------------------------------------------------------------

/**
 * Prints a module to markdown
 *
 * @remarks
 * `toMarkdown` will print and `ApiItem` to markdown in the following format:
 *
 * - Title
 * - Summary
 * - Remarks
 * - Signature
 * - Details
 * - Example
 * - Licenses
 *
 * And will format the signature using `Prettier.formatCode`
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Renderers}
 */
export const renderApiItem = (
  api: ApiItem,
): RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown> =>
  api._tag === 'Class' ?
    prettyClass(api)
  : pipe(
      prettySignature(api),
      RTE.map(signatureSection =>
        Md.lines([
          title(`\`${api.name}\``, api.deprecated, api.releaseTag),
          summary(api.summary),
          remarks(api),
          signatureSection,
          details(api),
          examples(api.examples),
          licenses(api),
        ]),
      ),
    )

/**
 * Prints a module to markdown
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Renderers}
 */
export const renderModule = (
  namedModule: NamedModule,
): RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown> =>
  pipe(
    O.do(function* ($) {
      const allApis = [
        ...namedModule.interfaces,
        ...namedModule.typeAliases,
        ...namedModule.moduleExports,
      ]

      const groupSortedApis = yield* $(
        pipe(
          allApis,
          RNEA.fromReadonlyArray,
          O.flatMap(
            flow(
              RNEA.sort(OrdApiCategory),
              RNEA.group(OrdApiCategory),
              RA.map(RNEA.sort(OrdApiName)),
              RNEA.fromReadonlyArray,
            ),
          ),
        ),
      )

      const toc = tableOfContents(groupSortedApis)

      const summary_ = summary(namedModule.summary)
      const remarks_ = remarks(namedModule)
      const details_ = details(namedModule, false)
      const licenses_ = licenses(namedModule)
      const examples_ = examples(namedModule.examples)

      const markdownByCategory = pipe(
        groupSortedApis,
        RNEA.traverse(RTE.ApplicativePar)(
          flow(
            RNEA.foldMap(SemigoupMarkdownRTE)(api =>
              pipe(
                renderApiItem(api),
                RTE.map(md =>
                  tuple(
                    pipe(
                      api.category,
                      O.getOrElse(() => DEFAULT_CATEGORY),
                    ),
                    md,
                  ),
                ),
              ),
            ),
          ),
        ),
      )

      return pipe(
        markdownByCategory,
        RTE.map(
          RNEA.foldMap(Md.Monoid)(([category, md]) =>
            Md.lines([Md.heading(2, Md.text(category)), md]),
          ),
        ),
        RTE.map(moduleContent =>
          Md.lines([
            Md.heading(1, Md.text(namedModule.name)),
            summary_,
            remarks_,
            details_,
            examples_,
            licenses_,
            toc,
            moduleContent,
          ]),
        ),
      )
    }),
    O.getOrElse(() => RTE.right(Md.Monoid.empty)),
  )

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

const DEFAULT_CATEGORY = 'Utilities'

const ordPreferModels: Ord.Ord<string> = {
  ...Str.Ord,
  compare: (a, b) =>
    a === b ? 0
    : a === 'Models' ? -1
    : b === 'Models' ? 1
    : a === 'Instances' ? -1
    : b === 'Instances' ? 1
    : Str.Ord.compare(a, b),
}

const OrdApiCategory: Ord.Ord<ApiItem> = pipe(
  O.getOrd(Ord.reverse(ordPreferModels)),
  Ord.reverse,
  Ord.contramap((api: ApiItem) => api.category),
)

const OrdApiName: Ord.Ord<ApiItem> = pipe(
  Str.Ord,
  Ord.contramap((api: ApiItem) => api.name),
)

const SemigoupMarkdownRTE: Sg.Semigroup<
  RTE.ReaderTaskEither<
    Prettier.PrettierConfig,
    never,
    readonly [category: string, result: Md.Markdown]
  >
> = Ap.getApplySemigroup(RTE.ApplicativePar)(
  Sg.tuple(Sg.first(), Sg.intercalate(Md.separator)(Md.Monoid)),
)

const optionToReadonlyArray: <A>(option: O.Option<A>) => ReadonlyArray<A> = O.match(
  () => RA.zero(),
  RA.of,
)

// -------------------------------------------------------------------------------------
// internal renderers
// -------------------------------------------------------------------------------------

/**
 * The title of an API item
 *
 * @internal
 */
const title: (
  title: string,
  deprecated: boolean,
  releaseTag: DocumentableItem['releaseTag'],
) => Md.Markdown = (title, deprecated, relaseTag) =>
  Md.lines([
    Md.heading(
      3,
      (deprecated ? Md.strikethrough : identity)(
        Md.line([
          Md.text(title),
          ...(relaseTag === 'public' ? []
          : relaseTag === 'beta' ? [Md.text(` (`), Md.italic(Md.text(`early access`)), Md.text(`)`)]
          : [Md.text(` (`), Md.italic(Md.text(`experimental`)), Md.text(')')]),
        ]),
      ),
    ),
  ])

/**
 * Renders a short paragraph of the TsDoc summary
 *
 * @internal
 */
const summary: (summary: O.Option<string>) => Md.Markdown = flow(
  O.map(summary => Md.paragraph(Md.text(summary))),
  optionToReadonlyArray,
  Md.lines,
)

/**
 * Renders the final remarks section of the TsDoc
 *
 * @internal
 */
const remarks = (api: ApiItem | NamedModule): Md.Markdown =>
  pipe(
    api.remarks,
    O.map(remarks => Md.lines([Md.heading(4, Md.text('Remarks')), Md.paragraph(Md.text(remarks))])),
    O.getOrElse(() => Md.Monoid.empty),
  )

/**
 * Renders the signature of an API item as a code block
 *
 * @internal
 */
const typeSignature: (signature: string) => Md.Markdown = signature =>
  Md.lines([Md.heading(4, Md.text('Signature')), Md.code('typescript', Md.text(signature.trim()))])

/**
 * Renders all examples of the TsDoc comment
 *
 * @internal
 */
const examples: (
  examples: O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>,
) => Md.Markdown = flow(
  O.map(examples =>
    pipe(
      examples,
      RA.mapWithIndex((i, [language, code]) =>
        Md.lines([
          Md.heading(4, Md.text(`Example${examples.length > 1 ? ` ${i + 1}` : ''}`)),
          Md.code(language, Md.text(code)),
        ]),
      ),
    ),
  ),
  O.getOrElseW(() => RA.empty),
  Md.lines,
)

/**
 * Renders a collection of details about an API item including since, deprecation, and removal
 * schedules.
 *
 * @internal
 */
const details = (
  api: ApiItem | ClassMember | NamedModule,
  showHeading: boolean = true,
): Md.Markdown =>
  pipe(
    api.since,
    O.map(since => Md.text(`Added in ${since}`)),
    optionToReadonlyArray,
    RA.concat(
      api.deprecated ?
        [Md.text('**Deprecated**')]
      : pipe(
          api.deprecationSchedule,
          O.map(deprecationSchedule => Md.text(`Deprecation planned for ${deprecationSchedule}`)),
          optionToReadonlyArray,
        ),
    ),
    RA.concat(
      pipe(
        api.removalSchedule,
        O.map(removalSchedule => Md.text(`Removal scheduled for ${removalSchedule}`)),
        optionToReadonlyArray,
      ),
    ),
    RNEA.fromReadonlyArray,
    O.match(
      () => Md.Monoid.empty,
      details =>
        Md.lines([
          ...(showHeading ? [Md.heading(4, Md.text('Details'))] : []),
          Md.unorderedList(details),
        ]),
    ),
  )

/**
 * Renders any associated licenses section of the TsDoc comment
 *
 * @internal
 */
const licenses = (api: ApiItem | ClassMember | NamedModule): Md.Markdown =>
  pipe(
    api.licenses,
    O.map(licenses =>
      Md.lines([
        Md.heading(4, Md.text(`License${licenses.length > 1 ? 's' : ''}`)),
        Md.unorderedList(pipe(licenses, RNEA.map(Md.text))),
      ]),
    ),
    O.getOrElse(() => Md.Monoid.empty),
  )

/**
 * Renders a table of contents for a module
 *
 * @internal
 */
const tableOfContents: (
  modules: RNEA.ReadonlyNonEmptyArray<RNEA.ReadonlyNonEmptyArray<ApiItem>>,
) => Md.Markdown = flow(
  RA.map(apiItems =>
    pipe(
      apiItems,
      RNEA.map(api =>
        Md.line([
          (api.deprecated ? Md.strikethrough : identity)(
            Md.text(
              `[${api.name}](#${api.name
                .trim()
                .toLowerCase()
                .replace(/\s/g, '-')
                .replace(/[^a-z0-9-]/g, '')})`,
            ),
          ),
          ...(api.deprecated ? [Md.text(' (deprecated)')]
          : api.releaseTag === 'beta' ? [Md.text(' (early access)')]
          : api.releaseTag === 'alpha' ? [Md.text(' (experimental)')]
          : []),
        ]),
      ),
      _ =>
        Md.lines([
          Md.heading(
            3,
            Md.text(
              pipe(
                RNEA.head(apiItems).category,
                O.getOrElse(() => DEFAULT_CATEGORY),
              ),
            ),
          ),
          Md.unorderedList(_),
        ]),
    ),
  ),
  Md.lines,
)

// -------------------------------------------------------------------------------------
// effectful renderers
// -------------------------------------------------------------------------------------

/**
 * Renders the signature of an API item as a code block after formatting it with Prettier
 *
 * @internal
 */
const prettySignature = (
  api: ApiItem | ClassMember,
): RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown> =>
  RTE.do(function* ($) {
    if (api._tag === 'Interface') {
      const interfaceSignature = `${api.signatureExcerpt}{ ${api.childExcerpts.join('\n')} }`
      return typeSignature(yield* $(Prettier.formatCode(interfaceSignature)))
    } else if (api._tag === 'Function') {
      const signatures = yield* $(
        pipe(api.overloadExcerpts, RTE.traverseArray(Prettier.formatCode)),
      )
      const signature = pipe(
        signatures,
        RNEA.fromReadonlyArray,
        O.map(RNEA.foldMap(Sg.intercalate(Md.newline)(Md.Monoid))(Md.text)),
        O.fold(
          () => Md.lines([]),
          signatures =>
            Md.lines([Md.heading(4, Md.text('Signature')), Md.code('typescript', signatures)]),
        ),
      )
      return signature
    } else if (api._tag === 'Variable') {
      const code = `export declare const ${api.signatureExcerpt}`
      return typeSignature(yield* $(Prettier.formatCode(code)))
    } else {
      return typeSignature(yield* $(Prettier.formatCode(api.signatureExcerpt)))
    }
  })

/**
 * Renders a class to markdown including its members and constructor while formatting the relevant
 * signatures with Prettier
 *
 * @internal
 */
const prettyClass = (
  cls: Class,
): RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown> =>
  pipe(
    cls.members,
    RTE.traverseArray(field =>
      pipe(
        Prettier.formatCode(field.signatureExcerpt),
        RTE.map(_ => tuple(field, _)),
      ),
    ),
    RTE.bindTo('fields'),
    RTE.apS('excerpt', prettySignature(cls)),
    RTE.map(({ fields, excerpt }) =>
      Md.lines([
        title(`\`${cls.name}\``, cls.deprecated, cls.releaseTag),
        summary(cls.summary),
        excerpt,
        remarks(cls),
        ...pipe(
          cls.constructorExcerpt,
          O.map(_ => Md.code('typescript', Md.text(_.trim()))),
          optionToReadonlyArray,
        ),
        details(cls),
        examples(cls.examples),
        licenses(cls),
        ...pipe(
          fields,
          RNEA.fromReadonlyArray,
          O.map(fields =>
            Md.lines([
              Md.heading(4, Md.text('Properties and Methods')),
              ...pipe(
                fields,
                RNEA.map(([field, formattedSignature]) =>
                  Md.lines([
                    Md.heading(
                      5,
                      Md.line([
                        Md.text(
                          `\`${field.name}\` (${
                            field.isProtected ? `protected ${field.type}` : field.type
                          })`,
                        ),
                        ...(field.deprecated ? [Md.text(' (deprecated)')] : []),
                        ...(field.releaseTag === 'beta' ? [Md.text(' (early access)')]
                        : field.releaseTag === 'alpha' ? [Md.text(' (experimental)')]
                        : []),
                      ]),
                    ),
                    details(field, false),
                    Md.code('typescript', Md.text(formattedSignature.trim())),
                    examples(field.examples),
                    licenses(field),
                  ]),
                ),
              ),
            ]),
          ),
          optionToReadonlyArray,
        ),
      ]),
    ),
  )
