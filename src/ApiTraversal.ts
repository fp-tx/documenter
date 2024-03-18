import { flow, pipe, tuple } from '@fp-tx/core/function'
import * as O from '@fp-tx/core/Option'
import * as Ord from '@fp-tx/core/Ord'
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as RR from '@fp-tx/core/ReadonlyRecord'
import * as Sg from '@fp-tx/core/Semigroup'
import * as Str from '@fp-tx/core/string'
import * as Api from '@microsoft/api-extractor-model'
import * as TsDoc from '@microsoft/tsdoc'

import * as ApiResult from './Api'
import type * as FileService from './FileService'
import * as MdFiles from './MarkdownFiles'
import type * as Prettier from './Prettier'

// -----------------------------------------------------------------------------
// Documentation Extractors
// -----------------------------------------------------------------------------

/**
 * Extracts the API Signature
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getTypeSignature = (apiItem: Api.ApiDeclaredItem): string => apiItem.excerpt.text

/**
 * Extracts the deprecation status from the TSDoc comment
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getDeprecationStatus = (apiItem: Api.ApiDocumentedItem): boolean =>
  apiItem.tsdocComment?.deprecatedBlock !== undefined

/**
 * Extracts the summary text from the TSDoc comment
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getSummaryString = (apiItem: Api.ApiDocumentedItem): O.Option<string> =>
  pipe(O.fromNullable(apiItem.tsdocComment?.summarySection?.nodes), O.flatMap(formatDocNodeAsText))

/**
 * Extracts the last remark text from the TSDoc comment
 *
 * @remarks
 * TSDoc comments can have multiple remarks, however API-Extractor only extracts the final remark
 * (for some reason)
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getRemarks = (apiItem: Api.ApiDocumentedItem): O.Option<string> =>
  pipe(
    O.fromNullable(apiItem.tsdocComment?.remarksBlock?.content.nodes),
    O.flatMap(formatDocNodeAsText),
  )

/**
 * Extracts the release tag from the TSDoc comment
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getReleaseTag = (apiItem: Api.ApiDocumentedItem): 'public' | 'beta' | 'alpha' => {
  const modifierTags = apiItem.tsdocComment?.modifierTagSet
  return (
    modifierTags?.isAlpha() ? 'alpha'
    : modifierTags?.isBeta() ? 'beta'
    : 'public'
  )
}

const getAllBlockScopedInlineTags =
  (blockName: `@${string}`, inlineTagName: `@${string}`) =>
  (docNode: TsDoc.DocComment): O.Option<RNEA.ReadonlyNonEmptyArray<string>> =>
    pipe(
      docNode.getChildNodes(),
      RA.findFirstMap(
        flow(
          O.fromPredicate((node): node is TsDoc.DocBlock => node instanceof TsDoc.DocBlock),
          O.filter(block => block.blockTag.tagName === blockName),
        ),
      ),
      O.map(block =>
        pipe(
          block.content.nodes,
          RA.filter(
            (docNode): docNode is TsDoc.DocParagraph => docNode instanceof TsDoc.DocParagraph,
          ),
          RA.flatMap(paragraph => paragraph.nodes),
          RA.filterMap(
            flow(
              O.fromPredicate(
                (node): node is TsDoc.DocInlineTag => node instanceof TsDoc.DocInlineTag,
              ),
              O.filter(inlineTag => inlineTag.tagName === inlineTagName),
              O.map(tag => tag.tagContent),
            ),
          ),
        ),
      ),
      O.flatMap(RNEA.fromReadonlyArray),
    )

/**
 * Extracts the since inline tag from the meta block
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getSinceTag: (apiItem: Api.ApiDocumentedItem) => O.Option<string> = flow(
  O.fromNullableK(item => item.tsdocComment),
  O.flatMap(getAllBlockScopedInlineTags('@meta', '@since')),
  O.map(RNEA.head),
)

/**
 * Extracts the category inline tag from the meta block
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getCategoryTag: (apiItem: Api.ApiDocumentedItem) => O.Option<string> = flow(
  O.fromNullableK(item => item.tsdocComment),
  O.flatMap(getAllBlockScopedInlineTags('@meta', '@category')),
  O.map(RNEA.head),
)

/**
 * Extracts the license inline tag from the meta block
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getLicenseTags: (
  apiItem: Api.ApiDocumentedItem,
) => O.Option<RNEA.ReadonlyNonEmptyArray<string>> = flow(
  O.fromNullableK(item => item.tsdocComment),
  O.flatMap(getAllBlockScopedInlineTags('@meta', '@license')),
)

/**
 * Extracts the deprecation schedule inline tag from the meta block
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getDeprecationSchedule: (apiItem: Api.ApiDocumentedItem) => O.Option<string> = flow(
  O.fromNullableK(item => item.tsdocComment),
  O.flatMap(getAllBlockScopedInlineTags('@meta', '@deprecationSchedule')),
  O.map(RNEA.head),
)

/**
 * Extracts the removal schedule inline tag from the meta block
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getRemovalSchedule: (apiItem: Api.ApiDocumentedItem) => O.Option<string> = flow(
  O.fromNullableK(item => item.tsdocComment),
  O.flatMap(getAllBlockScopedInlineTags('@meta', '@removalSchedule')),
  O.map(RNEA.head),
)

/**
 * Extracts the examples from the TSDoc comment
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Extractors}
 */
export const getExamples: (
  apiItem: Api.ApiDocumentedItem,
) => O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>> = flow(
  O.fromNullableK(item => item.tsdocComment?.customBlocks),
  O.flatMap(
    flow(
      RA.filter(node => node.blockTag.tagName === '@example'),
      RA.flatMap(node => node.content.nodes),
      RA.filterMap(
        flow(
          O.fromPredicate(
            (node): node is TsDoc.DocFencedCode => node instanceof TsDoc.DocFencedCode,
          ),
          O.map(node => tuple(node.language, node.code)),
        ),
      ),
      RNEA.fromReadonlyArray,
    ),
  ),
)

// -----------------------------------------------------------------------------
// api documenters
// -----------------------------------------------------------------------------

/**
 * Extracts a node's child functions along with their documentation
 *
 * @remarks
 * This function is mostly useful when the api-item is a namespace, because many nodes do not have
 * children which are functions
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const extractMemberFunctions = (apiItem: Api.ApiItem): ReadonlyArray<ApiResult.Function> =>
  pipe(
    apiItem.members,
    RA.filter((item): item is Api.ApiFunction => item instanceof Api.ApiFunction),
    RNEA.fromReadonlyArray,
    O.map(
      flow(
        getMemberFunctions,
        RR.collect(Str.Ord)(
          (_, [documentation, overloads]): ApiResult.Function => ({
            ...documentation,
            _tag: 'Function',
            overloadExcerpts: overloads,
          }),
        ),
      ),
    ),
    O.getOrElse(() => RA.zero<ApiResult.Function>()),
  )

/**
 * Extracts a class's properties, and methods along with their documentation
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const extractClassMembers = (apiItem: Api.ApiClass): ReadonlyArray<ApiResult.ClassMember> =>
  pipe(
    apiItem.members,
    RA.filter(
      (item): item is Api.ApiProperty | Api.ApiMethod =>
        item instanceof Api.ApiProperty || item instanceof Api.ApiMethod,
    ),
    RNEA.fromReadonlyArray,
    O.map(
      flow(
        RA.map(
          (item): ApiResult.ClassMember => ({
            ...extractDocumentation(item),
            _tag: 'ClassProperty',
            signatureExcerpt: getTypeSignature(item),
            isProtected: item.isProtected,
            type: item instanceof Api.ApiProperty ? 'property' : 'method',
          }),
        ),
      ),
    ),
    O.getOrElse(() => RA.zero<ApiResult.ClassMember>()),
  )

/**
 * Format a DocumentedItem as a DocumentableItem
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const extractDocumentation = (
  apiItem: Api.ApiDocumentedItem,
): ApiResult.DocumentableItem => ({
  category: getCategoryTag(apiItem),
  since: getSinceTag(apiItem),
  deprecationSchedule: getDeprecationSchedule(apiItem),
  removalSchedule: getRemovalSchedule(apiItem),
  licenses: getLicenseTags(apiItem),
  deprecated: getDeprecationStatus(apiItem),
  name: apiItem.displayName,
  releaseTag: getReleaseTag(apiItem),
  remarks: getRemarks(apiItem),
  summary: getSummaryString(apiItem),
  examples: getExamples(apiItem),
})

/**
 * Extract a named module from an ApiNamespace
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const extractNamedModule = (
  apiItem: Api.ApiNamespace,
): ReadonlyArray<ApiResult.NamedModule> => {
  const functions = extractMemberFunctions(apiItem)
  const content = pipe(
    apiItem.members,
    RA.filter(isSupportedApiItem),
    RA.foldMap(ApiResult.MonoidModule)(getModuleSingleton),
  )
  const since = getSinceTag(apiItem)
  const deprecationSchedule = getDeprecationSchedule(apiItem)
  const removalSchedule = getRemovalSchedule(apiItem)
  const summary = getSummaryString(apiItem)
  const examples = getExamples(apiItem)
  const licenses = getLicenseTags(apiItem)
  const deprecated = getDeprecationStatus(apiItem)
  const releaseTag = getReleaseTag(apiItem)
  const remarks = getRemarks(apiItem)

  return [
    ApiResult.namedModule(
      capitalize(apiItem.displayName),
      {
        interfaces: content.interfaces,
        typeAliases: content.typeAliases,
        moduleExports: [...content.moduleExports, ...functions],
      },
      {
        since,
        deprecationSchedule,
        removalSchedule,
        summary,
        examples,
        licenses,
        deprecated,
        releaseTag,
        remarks,
      },
    ),
  ]
}

/**
 * Collects all descendant namespaces
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const traverseNamespaces = (apiItem: Api.ApiItem): ReadonlyArray<ApiResult.NamedModule> => {
  if (apiItem instanceof Api.ApiNamespace) {
    return extractNamedModule(apiItem)
  }
  return apiItem.members.flatMap(traverseNamespaces)
}

/**
 * Format a tree as Markdown files
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Api Documenters}
 */
export const extractMarkdownFiles = (
  pkg: Api.ApiPackage,
): RTE.ReaderTaskEither<
  FileService.FileService & Prettier.PrettierConfig,
  FileService.FileServiceError,
  ReadonlyArray<MdFiles.MarkdownFiles>
> =>
  pipe(
    traverseNamespaces(pkg),
    RA.sort(OrdModule),
    RTE.traverseArray(namedModule =>
      pipe(
        ApiResult.renderModule(namedModule),
        RTE.map(_ => MdFiles.file(namedModule.name, _)),
      ),
    ),
  )

// -----------------------------------------------------------------------------
// internal types
// -----------------------------------------------------------------------------

/**
 * The types of API items that are support extraction as module items
 *
 * @internal
 */
type SupportedApiItems = Api.ApiInterface | Api.ApiTypeAlias | Api.ApiVariable | Api.ApiClass

/**
 * A record of member functions
 *
 * @internal
 */
type MemberFunctions = RR.ReadonlyRecord<
  string,
  readonly [item: ApiResult.DocumentableItem, overloads: ReadonlyArray<string>]
>

// -----------------------------------------------------------------------------
// internal
// -----------------------------------------------------------------------------

const OrdModule: Ord.Ord<ApiResult.NamedModule> = pipe(
  Str.Ord,
  Ord.contramap(_ => _.name),
)

const SemigroupMemberFunctions: Sg.Semigroup<MemberFunctions> = RR.getUnionSemigroup(
  Sg.tuple(Sg.first<ApiResult.DocumentableItem>(), RA.getSemigroup<string>()),
)

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

const isSupportedApiItem = (node: Api.ApiItem): node is SupportedApiItems =>
  node instanceof Api.ApiInterface ||
  node instanceof Api.ApiTypeAlias ||
  node instanceof Api.ApiVariable ||
  node instanceof Api.ApiClass

// -----------------------------------------------------------------------------
// internal extractors
// -----------------------------------------------------------------------------

/**
 * Extracts the text from a texty TsDoc node
 *
 * @internal
 */
const getText: (
  items: TsDoc.DocPlainText | TsDoc.DocCodeSpan | TsDoc.DocSoftBreak | string,
) => string = node =>
  typeof node === 'string' ? node
  : node instanceof TsDoc.DocCodeSpan ? `\`${node.code}\``
  : node instanceof TsDoc.DocSoftBreak ? '\n'
  : node.text

/**
 * Collects all functions from a list of ApiFunction nodes
 *
 * @internal
 */
const getMemberFunctions: (
  members: RNEA.ReadonlyNonEmptyArray<Api.ApiFunction>,
) => MemberFunctions = RNEA.foldMap(SemigroupMemberFunctions)(node =>
  pipe(
    node,
    O.fromPredicate(
      (item): item is Api.ApiDocumentedItem & Api.ApiFunction =>
        item instanceof Api.ApiDocumentedItem,
    ),
    O.match(
      () =>
        RR.singleton(
          node.displayName,
          tuple(ApiResult.defaultDocumentableItem(node.displayName), [getTypeSignature(node)]),
        ),
      item =>
        RR.singleton(node.displayName, tuple(extractDocumentation(item), [getTypeSignature(node)])),
    ),
  ),
)

/**
 * Extracts a module singleton from an ApiItem
 *
 * @internal
 */
const getModuleSingleton = (apiItem: SupportedApiItems): ApiResult.Module => {
  if (apiItem instanceof Api.ApiClass) {
    const members = extractClassMembers(apiItem)
    const constructorExcerpt = pipe(
      apiItem.members,
      RA.findFirstMap(
        O.fromPredicate(
          (child): child is Api.ApiConstructor => child instanceof Api.ApiConstructor,
        ),
      ),
      O.map(getTypeSignature),
    )
    const class_: ApiResult.Class = {
      ...extractDocumentation(apiItem),
      _tag: 'Class',
      constructorExcerpt,
      signatureExcerpt: getTypeSignature(apiItem),
      members,
    }
    return {
      interfaces: [],
      typeAliases: [],
      moduleExports: [class_],
    }
  } else if (apiItem instanceof Api.ApiInterface) {
    const interface_: ApiResult.Interface = {
      ...extractDocumentation(apiItem),
      _tag: 'Interface',
      signatureExcerpt: getTypeSignature(apiItem),
      childExcerpts: pipe(
        apiItem.members,
        RA.filterMap(
          flow(
            O.fromPredicate(
              (node): node is Api.ApiDeclaredItem => node instanceof Api.ApiDeclaredItem,
            ),
            O.map(getTypeSignature),
          ),
        ),
      ),
    }
    return {
      interfaces: [interface_],
      typeAliases: [],
      moduleExports: [],
    }
  } else if (apiItem instanceof Api.ApiTypeAlias) {
    const typeAlias: ApiResult.TypeAlias = {
      ...extractDocumentation(apiItem),
      _tag: 'TypeAlias',
      signatureExcerpt: getTypeSignature(apiItem),
    }
    return {
      interfaces: [],
      typeAliases: [typeAlias],
      moduleExports: [],
    }
  } else if (apiItem instanceof Api.ApiVariable) {
    const variable: ApiResult.Variable = {
      ...extractDocumentation(apiItem),
      _tag: 'Variable',
      signatureExcerpt: getTypeSignature(apiItem),
    }
    return {
      interfaces: [],
      typeAliases: [],
      moduleExports: [variable],
    }
  } else {
    return {
      interfaces: [],
      typeAliases: [],
      moduleExports: [],
    }
  }
}

/**
 * Formats a tsdoc block as text
 *
 * @internal
 */
const formatDocNodeAsText: (blocks: ReadonlyArray<TsDoc.DocNode>) => O.Option<string> = flow(
  RA.filter(
    (node): node is TsDoc.DocParagraph | TsDoc.DocFencedCode =>
      node instanceof TsDoc.DocParagraph || node instanceof TsDoc.DocFencedCode,
  ),
  RA.map(
    (node): ReadonlyArray<TsDoc.DocNode | string> =>
      node instanceof TsDoc.DocParagraph ?
        node.nodes
      : [`\`\`\`${node.language}\n${node.code}\`\`\``],
  ),
  RNEA.fromReadonlyArray,
  O.map(
    RNEA.foldMap(Sg.intercalate('\n')(Str.Semigroup))(
      flow(
        RA.filter(
          (node): node is string | TsDoc.DocPlainText | TsDoc.DocCodeSpan | TsDoc.DocSoftBreak =>
            typeof node === 'string' ||
            node instanceof TsDoc.DocCodeSpan ||
            node instanceof TsDoc.DocSoftBreak ||
            node instanceof TsDoc.DocPlainText,
        ),
        RA.foldMap(Str.Monoid)(getText),
      ),
    ),
  ),
)
