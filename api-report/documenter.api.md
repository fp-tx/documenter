## API Report File for "@fp-tx/documenter"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import * as Api_2 from '@microsoft/api-extractor-model';
import fs from 'fs';
import * as Mn from '@fp-tx/core/Monoid';
import * as O from '@fp-tx/core/Option';
import { Options } from 'prettier';
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray';
import * as RTE from '@fp-tx/core/ReaderTaskEither';
import { Show } from '@fp-tx/core/Show';
import * as TE from '@fp-tx/core/TaskEither';

declare namespace Api {
    export {
        DocumentableItem,
        defaultDocumentableItem,
        ApiItem,
        Interface,
        interface_ as interface,
        Function_2 as Function,
        function_ as function,
        TypeAlias,
        typeAlias,
        Variable,
        variable,
        ClassMember,
        classProperty,
        classMethod,
        Class,
        class_ as class,
        Module,
        module_2 as module,
        NamedModule,
        namedModule,
        MonoidModule,
        renderApiItem,
        renderModule
    }
}
export { Api }

// @public
type ApiItem = Interface | Function_2 | TypeAlias | Variable | Class;

declare namespace ApiTraversal {
    export {
        getTypeSignature,
        getDeprecationStatus,
        getSummaryString,
        getRemarks,
        getReleaseTag,
        getSinceTag,
        getCategoryTag,
        getLicenseTags,
        getDeprecationSchedule,
        getRemovalSchedule,
        getExamples,
        extractMemberFunctions,
        extractClassMembers,
        extractDocumentation,
        extractNamedModule,
        traverseNamespaces,
        extractMarkdownFiles
    }
}
export { ApiTraversal }

// @public
interface Bold {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly _tag: 'Bold';
}

// @public (undocumented)
const bold: (content: Markdown_2) => Markdown_2;

// @public
interface Class extends DocumentableItem {
    // (undocumented)
    readonly constructorExcerpt: O.Option<string>;
    // (undocumented)
    readonly members: ReadonlyArray<ClassMember>;
    // (undocumented)
    readonly signatureExcerpt: string;
    // (undocumented)
    readonly _tag: 'Class';
}

// @public (undocumented)
const class_: (name: string, signatureExcerpt: string, members: ReadonlyArray<ClassMember>, config?: Partial<DocumentableItem>) => Class;

// @public
interface ClassMember extends DocumentableItem {
    // (undocumented)
    readonly isProtected: boolean;
    // (undocumented)
    readonly signatureExcerpt: string;
    // (undocumented)
    readonly _tag: 'ClassProperty';
    // (undocumented)
    readonly type: 'property' | 'method';
}

// @public
const classMethod: (name: string, signatureExcerpt: string, config?: Partial<DocumentableItem>) => ClassMember;

// @public
const classProperty: (name: string, signatureExcerpt: string, config?: Partial<DocumentableItem>) => ClassMember;

// @public
interface Code {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly language: string;
    // (undocumented)
    readonly _tag: 'Code';
}

// @public (undocumented)
const code: (language: string, content: Markdown_2) => Markdown_2;

// @public
const defaultDocumentableItem: (name: string) => DocumentableItem;

// @public
interface DocumentableItem {
    // (undocumented)
    readonly category: O.Option<string>;
    // (undocumented)
    readonly deprecated: boolean;
    // (undocumented)
    readonly deprecationSchedule: O.Option<string>;
    // (undocumented)
    readonly examples: O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>;
    // (undocumented)
    readonly licenses: O.Option<RNEA.ReadonlyNonEmptyArray<string>>;
    // (undocumented)
    readonly name: string;
    // (undocumented)
    readonly releaseTag: 'public' | 'beta' | 'alpha';
    // (undocumented)
    readonly remarks: O.Option<string>;
    // (undocumented)
    readonly removalSchedule: O.Option<string>;
    // (undocumented)
    readonly since: O.Option<string>;
    // (undocumented)
    readonly summary: O.Option<string>;
}

// @public
class DocumentationError extends Error {
    constructor(context: string, error: unknown);
    // (undocumented)
    readonly context: string;
    // (undocumented)
    readonly name = "DocumentationError";
}

declare namespace Documenter {
    export {
        DocumentationError,
        extractApiPackage
    }
}
export { Documenter }

// @public
const extractApiPackage: (apiPath: string, outputFolder: string) => RTE.ReaderTaskEither<FileService.FileService & Prettier.PrettierConfig, FileService.FileServiceError | DocumentationError, void>;

// @public
const extractClassMembers: (apiItem: Api_2.ApiClass) => ReadonlyArray<Api.ClassMember>;

// @public
const extractDocumentation: (apiItem: Api_2.ApiDocumentedItem) => Api.DocumentableItem;

// @public
const extractMarkdownFiles: (pkg: Api_2.ApiPackage) => RTE.ReaderTaskEither<FileService.FileService & Prettier.PrettierConfig, FileService.FileServiceError, ReadonlyArray<MarkdownFiles.MarkdownFiles>>;

// @public
const extractMemberFunctions: (apiItem: Api_2.ApiItem) => ReadonlyArray<Api.Function>;

// @public
const extractNamedModule: (apiItem: Api_2.ApiNamespace) => ReadonlyArray<Api.NamedModule>;

// @public
const file: (name: string, content: Markdown.Markdown) => MarkdownFiles_2;

// @public
interface File_2 {
    readonly content: Markdown.Markdown;
    readonly name: string;
    // (undocumented)
    readonly _tag: 'File';
}

declare namespace FileService {
    export {
        FileServiceError,
        FileService_2 as FileService,
        FileServiceLive,
        writeFile,
        mkdir,
        upsertDir
    }
}
export { FileService }

// @public
class FileService_2 {
    // Warning: (ae-forgotten-export) The symbol "FileServiceMethods" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    [FileServiceSymbol]: FileServiceMethods;
    constructor(fileServiceMethods: FileServiceMethods);
}

// @public
class FileServiceError extends Error {
    constructor(Error: Error);
    // (undocumented)
    readonly Error: Error;
    // (undocumented)
    readonly name = "FileServiceError";
    // (undocumented)
    static readonly of: (Error: Error) => FileServiceError;
}

// @public
const FileServiceLive: FileService_2;

// @public
interface Folder {
    readonly contents: ReadonlyArray<MarkdownFiles_2>;
    readonly name: string;
    // (undocumented)
    readonly _tag: 'Folder';
}

// @public
const folder: (name: string, contents: ReadonlyArray<Folder | File_2>) => MarkdownFiles_2;

// @public
const formatCode: (code: string) => RTE.ReaderTaskEither<PrettierConfig, never, string>;

// @public (undocumented)
const function_: (name: string, overloadExcerpts: ReadonlyArray<string>, config?: Partial<DocumentableItem>) => Function_2;

// @public
interface Function_2 extends DocumentableItem {
    // (undocumented)
    readonly overloadExcerpts: ReadonlyArray<string>;
    // (undocumented)
    readonly _tag: 'Function';
}

// @public
const getCategoryTag: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getDeprecationSchedule: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getDeprecationStatus: (apiItem: Api_2.ApiDocumentedItem) => boolean;

// @public
const getExamples: (apiItem: Api_2.ApiDocumentedItem) => O.Option<RNEA.ReadonlyNonEmptyArray<readonly [language: string, code: string]>>;

// @public
const getLicenseTags: (apiItem: Api_2.ApiDocumentedItem) => O.Option<RNEA.ReadonlyNonEmptyArray<string>>;

// @public
const getReleaseTag: (apiItem: Api_2.ApiDocumentedItem) => 'public' | 'beta' | 'alpha';

// @public
const getRemarks: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getRemovalSchedule: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getSinceTag: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getSummaryString: (apiItem: Api_2.ApiDocumentedItem) => O.Option<string>;

// @public
const getTypeSignature: (apiItem: Api_2.ApiDeclaredItem) => string;

// @public
interface Heading {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly level: number;
    // (undocumented)
    readonly _tag: 'Heading';
}

// @public (undocumented)
const heading: (level: number, content: Markdown_2) => Markdown_2;

// @public
interface Interface extends DocumentableItem {
    // (undocumented)
    readonly childExcerpts: ReadonlyArray<string>;
    // (undocumented)
    readonly signatureExcerpt: string;
    // (undocumented)
    readonly _tag: 'Interface';
}

// @public (undocumented)
const interface_: (name: string, signatureExcerpt: string, childExcerpts: ReadonlyArray<string>, config?: Partial<DocumentableItem>) => Interface;

// @public
interface Italic {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly _tag: 'Italic';
}

// @public (undocumented)
const italic: (content: Markdown_2) => Markdown_2;

// @public
interface Line {
    // (undocumented)
    readonly content: ReadonlyArray<Markdown_2>;
    // (undocumented)
    readonly _tag: 'Line';
}

// @public (undocumented)
const line: (content: ReadonlyArray<Markdown_2>) => Markdown_2;

// @public
interface Lines {
    // (undocumented)
    readonly content: ReadonlyArray<Markdown_2>;
    // (undocumented)
    readonly _tag: 'Lines';
}

// @public (undocumented)
const lines: (content: ReadonlyArray<Markdown_2>) => Markdown_2;

declare namespace Markdown {
    export {
        Markdown_2 as Markdown,
        Bold,
        bold,
        Italic,
        italic,
        Code,
        code,
        Heading,
        heading,
        Newline,
        newline,
        Paragraph,
        paragraph,
        Text_2 as Text,
        text,
        Line,
        line,
        Lines,
        lines,
        Strikethrough,
        strikethrough,
        UnorderedList,
        unorderedList,
        Separator,
        separator,
        match,
        renderToString,
        Monoid,
        ShowLf
    }
}
export { Markdown }

// @public
type Markdown_2 = Text_2 | Bold | Italic | Strikethrough | Code | Heading | Paragraph | Newline | Line | Lines | UnorderedList | Separator;

declare namespace MarkdownFiles {
    export {
        MarkdownFiles_2 as MarkdownFiles,
        Folder,
        folder,
        File_2 as File,
        file,
        saveMarkdownOutput
    }
}
export { MarkdownFiles }

// @public
type MarkdownFiles_2 = Folder | File_2;

// @public
const match: <A>(matchers: {
    Bold: (bold: Bold, recurse: (markdown: Markdown_2) => A) => A;
    Italic: (italic: Italic, recurse: (markdown: Markdown_2) => A) => A;
    Code: (code: Code, recurse: (markdown: Markdown_2) => A) => A;
    Heading: (heading: Heading, recurse: (markdown: Markdown_2) => A) => A;
    Paragraph: (paragraph: Paragraph, recurse: (markdown: Markdown_2) => A) => A;
    Lines: (lines: Lines, recurse: (markdown: Markdown_2) => A) => A;
    Line: (line: Line, recurse: (markdown: Markdown_2) => A) => A;
    Strikethrough: (strikethrough: Strikethrough, recurse: (markdown: Markdown_2) => A) => A;
    Newline: (newline: Newline) => A;
    Text: (text: Text_2) => A;
    UnorderedList: (list: UnorderedList, recurse: (markdown: Markdown_2) => A) => A;
    Separator: (separator: Separator, recurse: (markdown: Markdown_2) => A) => A;
}) => (markdown: Markdown_2) => A;

// @public
const mkdir: (path: fs.PathLike, options?: fs.MakeDirectoryOptions) => RTE.ReaderTaskEither<FileService_2, FileServiceError, void>;

// @public
interface Module {
    // (undocumented)
    readonly interfaces: ReadonlyArray<Interface>;
    // (undocumented)
    readonly moduleExports: ReadonlyArray<Function_2 | Variable | Class>;
    // (undocumented)
    readonly typeAliases: ReadonlyArray<TypeAlias>;
}

// @public
const module_2: (interfaces: ReadonlyArray<Interface>, typeAliases: ReadonlyArray<TypeAlias>, moduleExports: ReadonlyArray<Function_2 | Variable | Class>) => Module;

// @public
const Monoid: Mn.Monoid<Markdown_2>;

// @public
const MonoidModule: Mn.Monoid<Module>;

// @public
interface NamedModule extends Module, DocumentableItem {
}

// @public
const namedModule: (name: string, modules?: Partial<Module>, config?: Partial<DocumentableItem>) => NamedModule;

// @public
interface Newline {
    // (undocumented)
    readonly _tag: 'Newline';
}

// @public (undocumented)
const newline: Markdown_2;

// @public
interface Paragraph {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly _tag: 'Paragraph';
}

// @public (undocumented)
const paragraph: (content: Markdown_2) => Markdown_2;

declare namespace Prettier {
    export {
        PrettierConfig,
        formatCode
    }
}
export { Prettier }

// @public
interface PrettierConfig {
    // (undocumented)
    readonly prettierOptions: Options;
}

// @public
const renderApiItem: (api: ApiItem) => RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Markdown.Markdown>;

// @public
const renderModule: (namedModule: NamedModule) => RTE.ReaderTaskEither<Prettier.PrettierConfig, never, Markdown.Markdown>;

// @public
const renderToString: (newline: string) => (markdown: Markdown_2) => string;

// @public
const saveMarkdownOutput: (markdownCompiler: (markdown: Markdown.Markdown) => string) => (outputFolder: string) => (output: MarkdownFiles_2) => RTE.ReaderTaskEither<FileService.FileService, FileService.FileServiceError, void>;

// @public
interface Separator {
    // (undocumented)
    readonly _tag: 'Separator';
}

// @public (undocumented)
const separator: Markdown_2;

// @public
const ShowLf: Show<Markdown_2>;

// @public
interface Strikethrough {
    // (undocumented)
    readonly content: Markdown_2;
    // (undocumented)
    readonly _tag: 'Strikethrough';
}

// @public (undocumented)
const strikethrough: (content: Markdown_2) => Markdown_2;

// @public (undocumented)
const text: (content: string) => Markdown_2;

// @public
interface Text_2 {
    // (undocumented)
    readonly content: string;
    // (undocumented)
    readonly _tag: 'Text';
}

// @public
const traverseNamespaces: (apiItem: Api_2.ApiItem) => ReadonlyArray<Api.NamedModule>;

// @public
interface TypeAlias extends DocumentableItem {
    // (undocumented)
    readonly signatureExcerpt: string;
    // (undocumented)
    readonly _tag: 'TypeAlias';
}

// @public
const typeAlias: (name: string, signatureExcerpt: string, config?: Partial<DocumentableItem>) => TypeAlias;

// @public
interface UnorderedList {
    // (undocumented)
    readonly items: RNEA.ReadonlyNonEmptyArray<Markdown_2>;
    // (undocumented)
    readonly _tag: 'UnorderedList';
}

// @public
const unorderedList: (items: RNEA.ReadonlyNonEmptyArray<Markdown_2>) => Markdown_2;

// @public
const upsertDir: (path: fs.PathLike, options?: fs.MakeDirectoryOptions) => RTE.ReaderTaskEither<FileService_2, FileServiceError, void>;

// @public
interface Variable extends DocumentableItem {
    // (undocumented)
    readonly signatureExcerpt: string;
    // (undocumented)
    readonly _tag: 'Variable';
}

// @public
const variable: (name: string, signatureExcerpt: string, config?: Partial<DocumentableItem>) => Variable;

// @public
const writeFile: (path: fs.PathLike, content: string, options?: fs.WriteFileOptions) => RTE.ReaderTaskEither<FileService_2, FileServiceError, void>;

// (No @packageDocumentation comment for this package)

```