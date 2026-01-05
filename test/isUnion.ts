import { IsUnion } from '../prepare';

type I0 = IsUnion<string|number> // true
type I1 = IsUnion<string|never> // false
type I2 =IsUnion<string|unknown> // false
type I3 =IsUnion<string> // false