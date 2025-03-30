import { RemoveReadonly } from '../index';
type UserInfo = {
  readonly name: string;
  readonly age: number;
}

type RemoveReadonlyUserInfo = RemoveReadonly<UserInfo>;

const lisi: RemoveReadonlyUserInfo = {
  name: 'lisi',
  age: 13,
}

lisi.name = 'xiaolisi';
lisi.age = 14;