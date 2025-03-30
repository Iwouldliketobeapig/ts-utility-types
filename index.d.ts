export type RemoveReadonly<T> = { -readonly [P in keyof T] : T[P] };

export type RemovePartReadonly<T, K extends keyof T> = RemoveReadonly<Pick<T, K>> & Omit<T, K>;

export type TypeAssign<A, B extends Object> = Omit<A, keyof B> & B;
 
export type PartOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export type PartRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
