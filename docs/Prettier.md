
# Prettier







### Config

* [PrettierConfig](#prettierconfig)

### Effects

* [formatCode](#formatcode)

## Config


### `PrettierConfig`

A dependency injected configuration for prettier




#### Signature

```typescript
export interface PrettierConfig {
  readonly prettierOptions: PrettierOptions
}
```

#### Details

* Added in 0.1.0



## Effects


### `formatCode`

Formats the given code using prettier




#### Signature

```typescript
export declare const formatCode: (code: string) => RTE.ReaderTaskEither<PrettierConfig, never, string>
```

#### Details

* Added in 0.1.0

