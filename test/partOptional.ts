import { PartOptional } from '../index';

type UserInfo = {
  name: string;
  age: number;
}

type PartOptionalUserInfo = PartOptional<UserInfo, 'age'>; // { name: string; age?: number }