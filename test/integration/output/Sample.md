
# Sample







### Classes

* [SampleClass](#sampleclass)

### Functions

* [functionExport](#functionexport)

### Types

* [Option](#option)

### Variables

* [variableExport](#variableexport)

### Utilities

* [SampleInterface](#sampleinterface)
* [SubClass](#subclass)

## Classes


### `SampleClass`

A sample class export



#### Signature

```typescript
export declare class SampleClass extends SubClass implements SampleInterface
```

```typescript
constructor(
    value: number, 
    mutableField: number);
```

#### Details

* Added in 1.0.0



#### Properties and Methods


##### `mutableField` (protected property)

* Added in 1.0.0
```typescript
protected mutableField: number;
```



##### `protectedField` (protected property)

* Added in 1.0.0
```typescript
protected protectedField: number;
```



##### `protectedFn` (protected method)

* Added in 1.0.0
```typescript
protected protectedFn(): number;
```



##### `protectedStaticField` (protected property)

* Added in 1.0.0
```typescript
protected static protectedStaticField: number;
```



##### `publicField` (property)

* Added in 1.0.0
```typescript
publicField: number
```



##### `publicFn` (method)

* Added in 1.0.0
```typescript
publicFn(): number;
```



##### `staticField` (property)

* Added in 1.0.0
```typescript
static staticField: number;
```



##### `superPrivate` (property)

* Added in 1.0.0
```typescript
get superPrivate(): number;

set superPrivate(value: number);
```



##### `value` (property)

* Added in 1.0.0
```typescript
readonly value: number;
```



## Functions


### `functionExport`

A sample function export




#### Signature

```typescript
export declare function functionExport(a: number, b: number): number

```

#### Details

* Added in 1.0.0



## Types


### `Option`

A tagged union type

```typescript
type Tagged = { _tag: 'foo' } | { _tag: 'bar' }
```



#### Remarks



Tagged unions are a powerful way to represent a finite set of possible values. They are often used to represent the state of a system or a set of actions that can be performed.


Here's an example of the Option tagged union

```typescript
type Option<A> = { _tag: 'None' } | { _tag: 'Some'; value: A }

const none: Option<number> = { _tag: 'none' }
const some: Option<number> = { _tag: 'some', value: 42 }
```



#### Signature

```typescript
export type Option<A> =
  | {
      readonly _tag: 'Some'
      some: A
    }
  | {
      readonly _tag: 'None'
    }
```

#### Details

* Added in 1.0.0

#### Example

```typescript
const foo: Tagged = { _tag: 'foo' }
const bar: Tagged = { _tag: 'bar' }

```


## Variables


### `variableExport`

A sample variable export




#### Signature

```typescript
export declare const variableExport: Option<number>
```

#### Details

* Added in 1.0.0



## Utilities


### `SampleInterface`

A sample interface




#### Signature

```typescript
export interface SampleInterface {
  readonly value: number
}
```

#### Details

* Added in 1.0.0



---


### `SubClass`

A sample sub-class



#### Signature

```typescript
export declare class SubClass
```

```typescript
constructor(who: string);
```

#### Details

* Added in 1.0.0



#### Properties and Methods


##### `who` (property)


```typescript
readonly who: string;
```

