import { pipe } from '@fp-tx/core/function'
import type * as Mn from '@fp-tx/core/Monoid'
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as Sg from '@fp-tx/core/Semigroup'
import { type Show } from '@fp-tx/core/Show'
import * as Str from '@fp-tx/core/string'

// -------------------------------------------------------------------------------------
// models and constructors
// -------------------------------------------------------------------------------------

/**
 * Represents a markdown value
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
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

/**
 * Represents bold text
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Bold {
  readonly _tag: 'Bold'
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const bold = (content: Markdown): Markdown => ({
  _tag: 'Bold',
  content,
})

/**
 * Represents italic text
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Italic {
  readonly _tag: 'Italic'
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const italic = (content: Markdown): Markdown => ({
  _tag: 'Italic',
  content,
})

/**
 * Represents code
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Code {
  readonly _tag: 'Code'
  readonly language: string
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const code = (language: string, content: Markdown): Markdown => ({
  _tag: 'Code',
  language,
  content,
})

/**
 * Represents a heading
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Heading {
  readonly _tag: 'Heading'
  readonly level: number
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const heading = (level: number, content: Markdown): Markdown => ({
  _tag: 'Heading',
  level,
  content,
})

/**
 * Represents a newline
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Newline {
  readonly _tag: 'Newline'
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const newline: Markdown = { _tag: 'Newline' }

/**
 * Represents a paragraph
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Paragraph {
  readonly _tag: 'Paragraph'
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const paragraph = (content: Markdown): Markdown => ({
  _tag: 'Paragraph',
  content,
})

/**
 * Represents a single line of text
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Text {
  readonly _tag: 'Text'
  readonly content: string
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const text = (content: string): Markdown => ({
  _tag: 'Text',
  content,
})

/**
 * Represents a line of rich text, will be printed on a single line
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Line {
  readonly _tag: 'Line'
  readonly content: ReadonlyArray<Markdown>
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const line = (content: ReadonlyArray<Markdown>): Markdown => ({
  _tag: 'Line',
  content,
})

/**
 * Represents a collection of lines
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Lines {
  readonly _tag: 'Lines'
  readonly content: ReadonlyArray<Markdown>
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const lines = (content: ReadonlyArray<Markdown>): Markdown => ({
  _tag: 'Lines',
  content,
})

/**
 * Represents strikethrough text
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Strikethrough {
  readonly _tag: 'Strikethrough'
  readonly content: Markdown
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const strikethrough = (content: Markdown): Markdown => ({
  _tag: 'Strikethrough',
  content,
})

/**
 * Represents an unordered list
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface UnorderedList {
  readonly _tag: 'UnorderedList'
  readonly items: RNEA.ReadonlyNonEmptyArray<Markdown>
}

/**
 * Create an unordered list
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const unorderedList = (items: RNEA.ReadonlyNonEmptyArray<Markdown>): Markdown => ({
  _tag: 'UnorderedList',
  items,
})

/**
 * Represents a line separator
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Models}
 */
export interface Separator {
  readonly _tag: 'Separator'
}

/**
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 */
export const separator: Markdown = { _tag: 'Separator' }

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Fold over a markdown value
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Destructors}
 */
export const match =
  <A>(matchers: {
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
  }) =>
  (markdown: Markdown): A => {
    const recurse = match(matchers)
    switch (markdown._tag) {
      case 'Bold':
        return matchers.Bold(markdown as Bold, recurse)
      case 'Italic':
        return matchers.Italic(markdown as Italic, recurse)
      case 'Code':
        return matchers.Code(markdown as Code, recurse)
      case 'Heading':
        return matchers.Heading(markdown as Heading, recurse)
      case 'Newline':
        return matchers.Newline(markdown as Newline)
      case 'Paragraph':
        return matchers.Paragraph(markdown as Paragraph, recurse)
      case 'Text':
        return matchers.Text(markdown as Text)
      case 'Lines':
        return matchers.Lines(markdown as Lines, recurse)
      case 'Strikethrough':
        return matchers.Strikethrough(markdown as Strikethrough, recurse)
      case 'UnorderedList':
        return matchers.UnorderedList(markdown as UnorderedList, recurse)
      case 'Line':
        return matchers.Line(markdown as Line, recurse)
      case 'Separator':
        return matchers.Separator(markdown as Separator, recurse)
    }
  }

/**
 * Print a markdown value to a string
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Destructors}
 */
export const renderToString: (newline: string) => (markdown: Markdown) => string = newline_ =>
  match({
    Bold: (bold, recurse) => `**${recurse(bold.content)}**`,
    Italic: (italic, recurse) => `*${recurse(italic.content)}*`,
    Code: (code, recurse) =>
      `\`\`\`${code.language}${recurse(newline)}${recurse(code.content)}${recurse(newline)}\`\`\``,
    Heading: (heading, recurse) =>
      `${recurse(newline)}${'#'.repeat(heading.level)} ${recurse(heading.content)}${recurse(
        newline,
      )}`,
    Paragraph: (paragraph, recurse) => recurse(paragraph.content),
    Lines: (lines, recurse) => lines.content.map(recurse).join(recurse(newline)),
    Strikethrough: (strikethrough, recurse) => `~~${recurse(strikethrough.content)}~~`,
    Newline: () => newline_,
    Text: text => text.content,
    Line: (line, recurse) => line.content.map(recurse).join(''),
    UnorderedList: (list, recurse) =>
      pipe(
        list.items,
        RNEA.foldMap(Sg.intercalate(recurse(newline))(Str.Semigroup))(line => `* ${recurse(line)}`),
      ),
    Separator: (_, recurse) => `${recurse(newline)}---${recurse(newline)}`,
  })

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * A Monoid instance for Markdown
 *
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 */
export const Monoid: Mn.Monoid<Markdown> = {
  empty: lines([]),
  concat: (x, y) => {
    if (x._tag === 'Lines' && y._tag === 'Lines') {
      return lines([...x.content, ...y.content])
    }
    return lines([x, y])
  },
}

/**
 * A Show instance for Markdown
 *
 * @remarks
 * This instance will render markdown with `\n` newline characters
 * @public
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 */
export const ShowLf: Show<Markdown> = {
  show: renderToString('\n'),
}
