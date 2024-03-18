
# Documenter







### Effects

* [extractApiPackage](#extractapipackage)

### Errors

* [DocumentationError](#documentationerror)

## Effects


### `extractApiPackage`

Extracts the API package and saves the markdown files to the output folder




#### Signature

```typescript
export declare const extractApiPackage: (
  apiPath: string,
  outputFolder: string,
) => RTE.ReaderTaskEither<
  FileService.FileService & Prettier.PrettierConfig,
  FileService.FileServiceError | DocumentationError,
  void
>
```

#### Details

* Added in 0.1.0



## Errors


### `DocumentationError`

Represents an error which occurs when extracting the API package



#### Signature

```typescript
export declare class DocumentationError extends Error
```

```typescript
constructor(context: string, error: unknown);
```

#### Details

* Added in 0.1.0



#### Properties and Methods


##### `context` (property)


```typescript
readonly context: string;
```



##### `name` (property)


```typescript
readonly name = "DocumentationError";
```

