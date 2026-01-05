export type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends unknown ? T & { [Key in K]-?: T[Key] } : never;

export type RemoveIndexSignature<T> = {
  [key in keyof T as string extends key ? never : number extends key ? never : key]: T[key];
}

export type IsUnion<T, U = T> = T extends U ? [U, T] extends [T, U] ? false : true : never;