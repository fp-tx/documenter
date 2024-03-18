
# Markdown







### Models

* [Bold](#bold)
* [Code](#code)
* [Heading](#heading)
* [Italic](#italic)
* [Line](#line)
* [Lines](#lines)
* [Markdown](#markdown)
* [Newline](#newline)
* [Paragraph](#paragraph)
* [Separator](#separator)
* [Strikethrough](#strikethrough)
* [Text](#text)
* [UnorderedList](#unorderedlist)

### Instances

* [Monoid](#monoid)
* [ShowLf](#showlf)

### Constructors

* [bold](#bold)
* [code](#code)
* [heading](#heading)
* [italic](#italic)
* [line](#line)
* [lines](#lines)
* [newline](#newline)
* [paragraph](#paragraph)
* [separator](#separator)
* [strikethrough](#strikethrough)
* [text](#text)
* [unorderedList](#unorderedlist)

### Destructors

* [match](#match)
* [renderToString](#rendertostring)

## Models


### `Bold`

Represents bold text




#### Signature

```typescript
export interface Bold {
  readonly _tag: 'Bold'
  readonly content: Markdown
}
```

#### Details

* Added in 0.1.0



---


### `Code`

Represents code




#### Signature

```typescript
export interface Code {
  readonly _tag: 'Code'
  readonly content: Markdown
  readonly language: string
}
```

#### Details

* Added in 0.1.0



---


### `Heading`

Represents a heading




#### Signature

```typescript
export interface Heading {
  readonly _tag: 'Heading'
  readonly content: Markdown
  readonly level: number
}
```

#### Details

* Added in 0.1.0



---


### `Italic`

Represents italic text




#### Signature

```typescript
export interface Italic {
  readonly _tag: 'Italic'
  readonly content: Markdown
}
```

#### Details

* Added in 0.1.0



---


### `Line`

Represents a line of rich text, will be printed on a single line




#### Signature

```typescript
export interface Line {
  readonly _tag: 'Line'
  readonly content: ReadonlyArray<Markdown>
}
```

#### Details

* Added in 0.1.0



---


### `Lines`

Represents a collection of lines




#### Signature

```typescript
export interface Lines {
  readonly _tag: 'Lines'
  readonly content: ReadonlyArray<Markdown>
}
```

#### Details

* Added in 0.1.0



---


### `Markdown`

Represents a markdown value




#### Signature

```typescript
export type Markdown =
  | Text
  | Bold
  | Italic
  | Strikethrough
  | Code
  | Heading
  | Paragraph
  | Newline
  | Line
  | Lines
  | UnorderedList
  | Separator
```

#### Details

* Added in 0.1.0



---


### `Newline`

Represents a newline




#### Signature

```typescript
export interface Newline {
  readonly _tag: 'Newline'
}
```

#### Details

* Added in 0.1.0



---


### `Paragraph`

Represents a paragraph




#### Signature

```typescript
export interface Paragraph {
  readonly _tag: 'Paragraph'
  readonly content: Markdown
}
```

#### Details

* Added in 0.1.0



---


### `Separator`

Represents a line separator




#### Signature

```typescript
export interface Separator {
  readonly _tag: 'Separator'
}
```

#### Details

* Added in 0.1.0



---


### `Strikethrough`

Represents strikethrough text




#### Signature

```typescript
export interface Strikethrough {
  readonly _tag: 'Strikethrough'
  readonly content: Markdown
}
```

#### Details

* Added in 0.1.0



---


### `Text`

Represents a single line of text




#### Signature

```typescript
export interface Text {
  readonly _tag: 'Text'
  readonly content: string
}
```

#### Details

* Added in 0.1.0



---


### `UnorderedList`

Represents an unordered list




#### Signature

```typescript
export interface UnorderedList {
  readonly _tag: 'UnorderedList'
  readonly items: RNEA.ReadonlyNonEmptyArray<Markdown>
}
```

#### Details

* Added in 0.1.0



## Instances


### `Monoid`

A Monoid instance for Markdown




#### Signature

```typescript
export declare const Monoid: Mn.Monoid<Markdown>
```

#### Details

* Added in 0.1.0



---


### `ShowLf`

A Show instance for Markdown



#### Remarks



This instance will render markdown with `\n` newline characters



#### Signature

```typescript
export declare const ShowLf: Show<Markdown>
```

#### Details

* Added in 0.1.0



## Constructors


### `bold`




#### Signature

```typescript
export declare const bold: (content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `code`




#### Signature

```typescript
export declare const code: (language: string, content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `heading`




#### Signature

```typescript
export declare const heading: (level: number, content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `italic`




#### Signature

```typescript
export declare const italic: (content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `line`




#### Signature

```typescript
export declare const line: (content: ReadonlyArray<Markdown>) => Markdown
```

#### Details

* Added in 0.1.0



---


### `lines`




#### Signature

```typescript
export declare const lines: (content: ReadonlyArray<Markdown>) => Markdown
```

#### Details

* Added in 0.1.0



---


### `newline`




#### Signature

```typescript
export declare const newline: Markdown
```

#### Details

* Added in 0.1.0



---


### `paragraph`




#### Signature

```typescript
export declare const paragraph: (content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `separator`




#### Signature

```typescript
export declare const separator: Markdown
```

#### Details

* Added in 0.1.0



---


### `strikethrough`




#### Signature

```typescript
export declare const strikethrough: (content: Markdown) => Markdown
```

#### Details

* Added in 0.1.0



---


### `text`




#### Signature

```typescript
export declare const text: (content: string) => Markdown
```

#### Details

* Added in 0.1.0



---


### `unorderedList`

Create an unordered list




#### Signature

```typescript
export declare const unorderedList: (items: RNEA.ReadonlyNonEmptyArray<Markdown>) => Markdown
```

#### Details

* Added in 0.1.0



## Destructors


### `match`

Fold over a markdown value




#### Signature

```typescript
export declare const match: <A>(matchers: {
  Bold: (bold: Bold, recurse: (markdown: Markdown) => A) => A
  Italic: (italic: Italic, recurse: (markdown: Markdown) => A) => A
  Code: (code: Code, recurse: (markdown: Markdown) => A) => A
  Heading: (heading: Heading, recurse: (markdown: Markdown) => A) => A
  Paragraph: (paragraph: Paragraph, recurse: (markdown: Markdown) => A) => A
  Lines: (lines: Lines, recurse: (markdown: Markdown) => A) => A
  Line: (line: Line, recurse: (markdown: Markdown) => A) => A
  Strikethrough: (strikethrough: Strikethrough, recurse: (markdown: Markdown) => A) => A
  Newline: (newline: Newline) => A
  Text: (text: Text) => A
  UnorderedList: (list: UnorderedList, recurse: (markdown: Markdown) => A) => A
  Separator: (separator: Separator, recurse: (markdown: Markdown) => A) => A
}) => (markdown: Markdown) => A
```

#### Details

* Added in 0.1.0



---


### `renderToString`

Print a markdown value to a string




#### Signature

```typescript
export declare const renderToString: (newline: string) => (markdown: Markdown) => string
```

#### Details

* Added in 0.1.0

