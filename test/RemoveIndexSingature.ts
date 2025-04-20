import { RemoveIndexSignature } from '../prepare';

interface Foo {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}