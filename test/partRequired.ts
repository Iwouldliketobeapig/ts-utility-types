import { PartRequired } from '../index';

type UserInfo = {
  name: string;
  age: number;
  height?: number;
  sex?: string;
}

type UserInfoPartRequired = PartRequired<UserInfo, 'sex'>; // { name: string; age: number; height?: number; sex: string }

const lisi: UserInfoPartRequired= {
  name: 'lisi',
  age: 12,
  sex: 'man',
}