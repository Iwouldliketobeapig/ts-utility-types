import { TypeAssign } from '../index';

type A = {
  a: string;
  b: number;
}

type B = {
  a: number;
  c: string;
}

type Combin = TypeAssign<A, B>; // { a: number; b: number; c: string}

const combin: Combin = {
  b: 123,
  a: 123,
  c: '123',
}