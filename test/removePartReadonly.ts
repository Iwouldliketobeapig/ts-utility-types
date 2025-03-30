import { RemovePartReadonly } from '../index';
type UserInfo = {
  readonly name: string;
  readonly age: number;
}

type RemovePartReadonlyUserInfo = RemovePartReadonly<UserInfo, 'age'>;

const lisi: RemovePartReadonlyUserInfo = {
  name: 'lisi',
  age: 13,
}

lisi.age = 14;
// lisi.name = 'asd';