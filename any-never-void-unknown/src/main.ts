// const doSomething = () => {
//   console.log("Do something...");
// };

// void is of undefined or unknown
const doSomething = (): void => {
  console.log("doSomething");
};

const foo: void = undefined;

// Type of Any: Is not good to use it,
// any is not a solution is just a start of more problems.
// if using any, then means that there is something wrong.
let foo2: any = "foo";
foo2 = null;
foo2 = 3;

// Type Never
// never cannot a reachable end code.
// something that will never happen
const doSomething2 = (): never => {
  throw "never";
};

// Type unknown : an alternative to type any

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// creating new variables
// let s1: string = vAny;
// // We can't assign unknown directly in other types
// let s2: string = vUnknown;

// Type Assersions:
//we want to convert one type to another;
// we want to tell typescript what type is it.
// Use the keyword "AS" followed by the type name;
let vUnknown2: unknown = 10;
let s3: string = vUnknown2 as string; // we convert unknown to string

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;
