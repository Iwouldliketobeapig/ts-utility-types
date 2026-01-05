# typescript-type-tools

## Installation

```typescript
// npm
npm i -D typescript-type-tools
// yarn
yarn add -D typescript-type-tools
// pnpm
pnpm add -D typescript-type-tools
```

## Utility Types

### RemoveReadonly

```typescript
import { RemoveReadonly } from "typescript-type-tools";
type UserInfo = {
  readonly name: string;
  readonly age: number;
};

type RemoveReadonlyUserInfo = RemoveReadonly<UserInfo>;

const lisi: RemoveReadonlyUserInfo = {
  name: "lisi",
  age: 13,
};

lisi.name = "xiaolisi";
lisi.age = 14;
```

### RemovePartReadonly

```typescript
import { RemovePartReadonly } from "typescript-type-tools";
type UserInfo = {
  readonly name: string;
  readonly age: number;
};

type RemovePartReadonlyUserInfo = RemovePartReadonly<UserInfo, "age">;

const lisi: RemovePartReadonlyUserInfo = {
  name: "lisi",
  age: 13,
};

lisi.age = 14;
```

### TypeAssign

```typescript
import { TypeAssign } from "../index";

type A = {
  a: string;
  b: number;
};

type B = {
  a: number;
  c: string;
};

type Combin = TypeAssign<A, B>; // { a: number; b: number; c: string}
```

### PartOptional

```typescript
import { PartOptional } from "typescript-type-tools";

type UserInfo = {
  name: string;
  age: number;
};

type PartOptionalUserInfo = PartOptional<UserInfo, "age">; // { name: string; age?: number }
```

### PartRequired

```typescript
import { PartRequired } from "../index";

type UserInfo = {
  name: string;
  age: number;
  height?: number;
  sex?: string;
};

type UserInfoPartRequired = PartRequired<UserInfo, "sex">; // { name: string; age: number; height?: number; sex: string }
```

### PartRequiredOtherOptional

```typescript
import { PartRequiredOtherOptional } from "typescript-type-tools";

type UserInfo = {
  name: string;
  age: number;
  height?: number;
  sex?: string;
};

type UserInfoPartRequiredOtherOptional = PartRequiredOtherOptional<
  UserInfo,
  "sex"
>; // { name?: string; age?: number; height?: number; sex?: string }
```
