// const doSomething = () => {
//   console.log("Do something...");
// };
// void is of undefined or unknown
var doSomething = function () {
    console.log("doSomething");
};
var foo = undefined;
// Type of Any: Is not good to use it,
// any is not a solution is just a start of more problems.
// if using any, then means that there is something wrong.
var foo2 = "foo";
foo2 = null;
foo2 = 3;
// Type Never
// never cannot a reachable end code.
// something that will never happen
var doSomething2 = function () {
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
var vUnknown2 = 10;
var s3 = vUnknown2; // we convert unknown to string
var pageNumber = "1";
var numericPageNumber = pageNumber;
