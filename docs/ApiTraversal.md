
# ApiTraversal







### Api Documenters

* [extractClassMembers](#extractclassmembers)
* [extractDocumentation](#extractdocumentation)
* [extractMarkdownFiles](#extractmarkdownfiles)
* [extractMemberFunctions](#extractmemberfunctions)
* [extractNamedModule](#extractnamedmodule)
* [traverseNamespaces](#traversenamespaces)

### Api Extractors

* [getCategoryTag](#getcategorytag)
* [getDeprecationSchedule](#getdeprecationschedule)
* [getDeprecationStatus](#getdeprecationstatus)
* [getExamples](#getexamples)
* [getLicenseTags](#getlicensetags)
* [getReleaseTag](#getreleasetag)
* [getRemarks](#getremarks)
* [getRemovalSchedule](#getremovalschedule)
* [getSinceTag](#getsincetag)
* [getSummaryString](#getsummarystring)
* [getTypeSignature](#gettypesignature)

## Api Documenters


### `extractClassMembers`

Extracts a class's properties, and methods along with their documentation




#### Signature

```typescript
export declare const extractClassMembers: (apiItem: Api.ApiClass) => ReadonlyArray<ApiResult.ClassMember>
```

#### Details

* Added in 0.1.0



---


### `extractDocumentation`

Format a DocumentedItem as a DocumentableItem




#### Signature

```typescript
export declare const extractDocumentation: (apiItem: Api.ApiDocumentedItem) => ApiResult.DocumentableItem
```

#### Details

* Added in 0.1.0



---


### `extractMarkdownFiles`

Format a tree as Markdown files




#### Signature

```typescript
export declare const extractMarkdownFiles: (
  pkg: Api.ApiPackage,
) => RTE.ReaderTaskEither<
  FileService.FileService & Prettier.PrettierConfig,
  FileService.FileServiceError,
  ReadonlyArray<MdFiles.MarkdownFiles>
>
```

#### Details

* Added in 0.1.0



---


### `extractMemberFunctions`

Extracts a node's child functions along with their documentation



#### Remarks



This function is mostly useful when the api-item is a namespace, because many nodes do not have children which are functions



#### Signature

```typescript
export declare const extractMemberFunctions: (apiItem: Api.ApiItem) => ReadonlyArray<ApiResult.Function>
```

#### Details

* Added in 0.1.0



---


### `extractNamedModule`

Extract a named module from an ApiNamespace




#### Signature

```typescript
export declare const extractNamedModule: (apiItem: Api.ApiNamespace) => ReadonlyArray<ApiResult.NamedModule>
```

#### Details

* Added in 0.1.0



---


### `traverseNamespaces`

Collects all descendant namespaces




#### Signature

```typescript
export declare const traverseNamespaces: (apiItem: Api.ApiItem) => ReadonlyArray<ApiResult.NamedModule>
```

#### Details

* Added in 0.1.0



## Api Extractors


### `getCategoryTag`

Extracts the category inline tag from the meta block




#### Signature

```typescript
export declare const getCategoryTag: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getDeprecationSchedule`

Extracts the deprecation schedule inline tag from the meta block




#### Signature

```typescript
export declare const getDeprecationSchedule: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getDeprecationStatus`

Extracts the deprecation status from the TSDoc comment




#### Signature

```typescript
export declare const getDeprecationStatus: (apiItem: Api.ApiDocumentedItem) => boolean
```

#### Details

* Added in 0.1.0



---


### `getExamples`

Extracts the examples from the TSDoc comment




#### Signature

```typescript
export declare const getExamples: (
  apiItem: Api.ApiDocumentedItem,
) => O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>
```

#### Details

* Added in 0.1.0



---


### `getLicenseTags`

Extracts the license inline tag from the meta block




#### Signature

```typescript
export declare const getLicenseTags: (apiItem: Api.ApiDocumentedItem) => O.Option<RNEA.ReadonlyNonEmptyArray<string>>
```

#### Details

* Added in 0.1.0



---


### `getReleaseTag`

Extracts the release tag from the TSDoc comment




#### Signature

```typescript
export declare const getReleaseTag: (apiItem: Api.ApiDocumentedItem) => 'public' | 'beta' | 'alpha'
```

#### Details

* Added in 0.1.0



---


### `getRemarks`

Extracts the last remark text from the TSDoc comment



#### Remarks



TSDoc comments can have multiple remarks, however API-Extractor only extracts the final remark (for some reason)



#### Signature

```typescript
export declare const getRemarks: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getRemovalSchedule`

Extracts the removal schedule inline tag from the meta block




#### Signature

```typescript
export declare const getRemovalSchedule: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getSinceTag`

Extracts the since inline tag from the meta block




#### Signature

```typescript
export declare const getSinceTag: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getSummaryString`

Extracts the summary text from the TSDoc comment




#### Signature

```typescript
export declare const getSummaryString: (apiItem: Api.ApiDocumentedItem) => O.Option<string>
```

#### Details

* Added in 0.1.0



---


### `getTypeSignature`

Extracts the API Signature




#### Signature

```typescript
export declare const getTypeSignature: (apiItem: Api.ApiDeclaredItem) => string
```

#### Details

* Added in 0.1.0

