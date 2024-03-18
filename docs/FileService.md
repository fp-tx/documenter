
# FileService







### Effects

* [mkdir](#mkdir)
* [upsertDir](#upsertdir)
* [writeFile](#writefile)

### Errors

* [FileServiceError](#fileserviceerror)

### Providers

* [FileServiceLive](#fileservicelive)

### Services

* [FileService](#fileservice)

## Effects


### `mkdir`

Creates a directory in the file system




#### Signature

```typescript
export declare const mkdir: (
  path: fs.PathLike,
  options?: fs.MakeDirectoryOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void>
```

#### Details

* Added in 0.1.0



---


### `upsertDir`

Creates a directory in the file system if it does not exist




#### Signature

```typescript
export declare const upsertDir: (
  path: fs.PathLike,
  options?: fs.MakeDirectoryOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void>
```

#### Details

* Added in 0.1.0



---


### `writeFile`

Writes a file to the file system




#### Signature

```typescript
export declare const writeFile: (
  path: fs.PathLike,
  content: string,
  options?: fs.WriteFileOptions,
) => RTE.ReaderTaskEither<FileService, FileServiceError, void>
```

#### Details

* Added in 0.1.0



## Errors


### `FileServiceError`

Represents a file service error



#### Signature

```typescript
export declare class FileServiceError extends Error
```

```typescript
constructor(Error: Error);
```

#### Details

* Added in 0.1.0



#### Properties and Methods


##### `Error` (property)


```typescript
readonly Error: Error;
```



##### `name` (property)


```typescript
readonly name = "FileServiceError";
```



##### `of` (property)


```typescript
static readonly of: (Error: Error) => FileServiceError;
```



## Providers


### `FileServiceLive`

A node-based implementation of the file service




#### Signature

```typescript
export declare const FileServiceLive: FileService
```

#### Details

* Added in 0.1.0



## Services


### `FileService`

Represents a minimal file service for the purpose of fp-tx/documenter



#### Signature

```typescript
export declare class FileService
```

```typescript
constructor(fileServiceMethods: FileServiceMethods);
```

#### Details

* Added in 0.1.0



#### Properties and Methods


##### `[FileServiceSymbol]` (property)


```typescript
[FileServiceSymbol]: FileServiceMethods;
```

