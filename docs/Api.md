
# Api







### Models

* [ApiItem](#apiitem)
* [Class](#class)
* [ClassMember](#classmember)
* [DocumentableItem](#documentableitem)
* [Function](#function)
* [Interface](#interface)
* [Module](#module)
* [NamedModule](#namedmodule)
* [TypeAlias](#typealias)
* [Variable](#variable)

### Instances

* [MonoidModule](#monoidmodule)

### Constructors

* [classMethod](#classmethod)
* [classProperty](#classproperty)
* [defaultDocumentableItem](#defaultdocumentableitem)
* [module](#module)
* [namedModule](#namedmodule)
* [typeAlias](#typealias)
* [variable](#variable)

### Renderers

* [renderApiItem](#renderapiitem)
* [renderModule](#rendermodule)

### Utilities

* [class](#class)
* [function](#function)
* [interface](#interface)

## Models


### `ApiItem`

A union of all API items




#### Signature

```typescript
export type ApiItem = Interface | Function | TypeAlias | Variable | Class
```

#### Details

* Added in 0.1.0



---


### `Class`

Represents a class




#### Signature

```typescript
export interface Class extends DocumentableItem {
  readonly _tag: 'Class'
  readonly constructorExcerpt: O.Option<string>
  readonly members: ReadonlyArray<ClassMember>
  readonly signatureExcerpt: string
}
```

#### Details

* Added in 0.1.0



---


### `ClassMember`

Represents a class property or method




#### Signature

```typescript
export interface ClassMember extends DocumentableItem {
  readonly _tag: 'ClassProperty'
  readonly isProtected: boolean
  readonly signatureExcerpt: string
  readonly type: 'property' | 'method'
}
```

#### Details

* Added in 0.1.0



---


### `DocumentableItem`

Common documentable item properties




#### Signature

```typescript
export interface DocumentableItem {
  readonly category: O.Option<string>
  readonly deprecated: boolean
  readonly deprecationSchedule: O.Option<string>
  readonly examples: O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>
  readonly licenses: O.Option<RNEA.ReadonlyNonEmptyArray<string>>
  readonly name: string
  readonly releaseTag: 'public' | 'beta' | 'alpha'
  readonly remarks: O.Option<string>
  readonly removalSchedule: O.Option<string>
  readonly since: O.Option<string>
  readonly summary: O.Option<string>
}
```

#### Details

* Added in 0.1.0



---


### `Function`

Represents a function




#### Signature

```typescript
export interface Function extends DocumentableItem {
  readonly _tag: 'Function'
  readonly overloadExcerpts: ReadonlyArray<string>
}
```

#### Details

* Added in 0.1.0



---


### `Interface`

Represents an interface




#### Signature

```typescript
export interface Interface extends DocumentableItem {
  readonly _tag: 'Interface'
  readonly childExcerpts: ReadonlyArray<string>
  readonly signatureExcerpt: string
}
```

#### Details

* Added in 0.1.0



---


### `Module`

A collection of documentation items for a single module




#### Signature

```typescript
export interface Module {
  readonly interfaces: ReadonlyArray<Interface>
  readonly moduleExports: ReadonlyArray<Function | Variable | Class>
  readonly typeAliases: ReadonlyArray<TypeAlias>
}
```

#### Details

* Added in 0.1.0



---


### `NamedModule`

A named module




#### Signature

```typescript
export interface NamedModule extends Module, DocumentableItem {}
```

#### Details

* Added in 0.1.0



---


### `TypeAlias`

Represents a type alias




#### Signature

```typescript
export interface TypeAlias extends DocumentableItem {
  readonly _tag: 'TypeAlias'
  readonly signatureExcerpt: string
}
```

#### Details

* Added in 0.1.0



---


### `Variable`

Represents an exported variable




#### Signature

```typescript
export interface Variable extends DocumentableItem {
  readonly _tag: 'Variable'
  readonly signatureExcerpt: string
}
```

#### Details

* Added in 0.1.0



## Instances


### `MonoidModule`

A monoid for `Module`




#### Signature

```typescript
export declare const MonoidModule: Mn.Monoid<Module>
```

#### Details

* Added in 0.1.0



## Constructors


### `classMethod`

Represents a class method




#### Signature

```typescript
export declare const classMethod: (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
) => ClassMember
```

#### Details

* Added in 0.1.0



---


### `classProperty`

Represents a class property




#### Signature

```typescript
export declare const classProperty: (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
) => ClassMember
```

#### Details

* Added in 0.1.0



---


### `defaultDocumentableItem`

A default documentable item




#### Signature

```typescript
export declare const defaultDocumentableItem: (name: string) => DocumentableItem
```

#### Details

* Added in 0.1.0



---


### `module`

Represents a collection of documentation exports for a single module




#### Signature

```typescript
export declare const module: (
  interfaces: ReadonlyArray<Interface>,
  typeAliases: ReadonlyArray<TypeAlias>,
  moduleExports: ReadonlyArray<Function | Variable | Class>,
) => Module
```

#### Details

* Added in 0.1.0



---


### `namedModule`

Represents a named module




#### Signature

```typescript
export declare const namedModule: (
  name: string,
  modules?: Partial<Module>,
  config?: Partial<DocumentableItem>,
) => NamedModule
```

#### Details

* Added in 0.1.0



---


### `typeAlias`

Represents an exported type alias




#### Signature

```typescript
export declare const typeAlias: (
  name: string,
  signatureExcerpt: string,
  config?: Partial<DocumentableItem>,
) => TypeAlias
```

#### Details

* Added in 0.1.0



---


### `variable`

Represents an exported variable




#### Signature

```typescript
export declare const variable: (name: string, signatureExcerpt: string, config?: Partial<DocumentableItem>) => Variable
```

#### Details

* Added in 0.1.0



## Renderers


### `renderApiItem`

Prints a module to markdown



#### Remarks



`toMarkdown` will print and `ApiItem` to markdown in the following format:


- Title - Summary - Remarks - Signature - Details - Example - Licenses


And will format the signature using `Prettier.formatCode`



#### Signature

```typescript
export declare const renderApiItem: (api: ApiItem) => RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown>
```

#### Details

* Added in 0.1.0



---


### `renderModule`

Prints a module to markdown




#### Signature

```typescript
export declare const renderModule: (
  namedModule: NamedModule,
) => RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Md.Markdown>
```

#### Details

* Added in 0.1.0



## Utilities


### `class`




#### Signature

```typescript
export declare const class_: (
  name: string,
  signatureExcerpt: string,
  members: ReadonlyArray<ClassMember>,
  config?: Partial<DocumentableItem>,
) => Class
```




---


### `function`




#### Signature

```typescript
export declare const function_: (
  name: string,
  overloadExcerpts: ReadonlyArray<string>,
  config?: Partial<DocumentableItem>,
) => Function
```




---


### `interface`




#### Signature

```typescript
export declare const interface_: (
  name: string,
  signatureExcerpt: string,
  childExcerpts: ReadonlyArray<string>,
  config?: Partial<DocumentableItem>,
) => Interface
```


