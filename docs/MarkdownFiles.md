
# MarkdownFiles







### Models

* [File](#file)
* [Folder](#folder)
* [MarkdownFiles](#markdownfiles)

### Constructors

* [file](#file)
* [folder](#folder)

### Effects

* [saveMarkdownOutput](#savemarkdownoutput)

## Models


### `File`

Represents a file in the file system.




#### Signature

```typescript
export interface File {
  readonly _tag: 'File'
  readonly content: Md.Markdown
  readonly name: string
}
```

#### Details

* Added in 0.1.0



---


### `Folder`

Represents a folder in the file system.




#### Signature

```typescript
export interface Folder {
  readonly _tag: 'Folder'
  readonly contents: ReadonlyArray<MarkdownFiles>
  readonly name: string
}
```

#### Details

* Added in 0.1.0



---


### `MarkdownFiles`

Represents the generated markdown output




#### Signature

```typescript
export type MarkdownFiles = Folder | File
```

#### Details

* Added in 0.1.0



## Constructors


### `file`

Constructs a file.




#### Signature

```typescript
export declare const file: (name: string, content: Md.Markdown) => MarkdownFiles
```

#### Details

* Added in 0.1.0



---


### `folder`

Constructs a folder.




#### Signature

```typescript
export declare const folder: (name: string, contents: ReadonlyArray<Folder | File>) => MarkdownFiles
```

#### Details

* Added in 0.1.0



## Effects


### `saveMarkdownOutput`

Outputs the markdown output to the file system




#### Signature

```typescript
export declare const saveMarkdownOutput: (
  markdownCompiler: (markdown: Md.Markdown) => string,
) => (
  outputFolder: string,
) => (output: MarkdownFiles) => RTE.ReaderTaskEither<FileService.FileService, FileService.FileServiceError, void>
```

#### Details

* Added in 0.1.0

