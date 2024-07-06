// TypeScript sometimes warns you about
// things which will fail at runtime

const a = "hello";

a.toString();

// But not everything it warns you
// about will fail at runtime
type Obj = {
  foo?: string
}
const obj: Obj = {};

obj.foo = "hello";

// It will try to warn you as close to
// the source of the problem as possible

type MyUser = {
  name: string;
};

const user: MyUser = {
  name: "Katherine",
};

// But sometimes that's not always possible

type FunctionThatReturnsAString = () => string;

const fn: FunctionThatReturnsAString = () => {
  return "123";
};
