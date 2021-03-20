// const hello = "world"; //This means is a type of World, b/c of const
// let hello = "World"; // this means is a type of string. we allow it to change it b/c of let
// hello = true // This won't work because we cannot change the type once it is initially declared, thus this variable can only accept strings for this especific example

//TO EXCPLICITY SET A TYPE
let hello: string = "world";

// For functions that work on javascript
// Regular declaration
// const getFullName = (name, surname) =>  {
//     return name + " " + surname;
// }
// console.log(getFullName(true, ["foo"]));

// Declaring functions in typescript with explicit types
// and the value that needs to be returned
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};
console.log(getFullName("monster", "lessons"));

// ==================INTERFACES || ENTITIES =================
// javascript:
/*
const user = {
    name: "someone",
    age: 30
}
const user2 = {
    name: "Jack",

}
*/
// typescript
// const User: {name: string; age: number} ={
//     name: "monster",
//     age: 3
// }

// === OR
// start with capital letter
interface IUser {
  // now we can use user everywhere
  name: string; // By default all properties inside interface are mandatory
  age?: number; // ?  this changes the property to be optional
}

const user: IUser = {
  name: "monster",
  age: 30,
};

const user2: IUser = {
  name: "johhny",
};

console.log(user.name, user.age);
// It is not good to have TOO MANY interfaces in a project , it will be impossible to support the project

// ========= FUNCTION INSIDE INTERFACES =================

interface PersonInterface {
  name: string;
  age: number;
  getMessage(): string;
}

const person1: PersonInterface = {
  name: "Johnny",
  age: 29,
  getMessage() {
    return "Hello " + this.name;
  },
};

console.log(person1.getMessage());

//Naming of interfaces
// There can be a name collision. we want to name interfaces that we can tell appart from classes.
// two popular ways:
//  IUser   // start with I before the name to mean interface
// UserInterface // postfix for all interfaces

// They are important for the architecture of the project.

// WE CAN ALSO SET DIFFERENT TYPES FOR A SINGLE VARIABLE
let username: string = "alex";
let pageName: string | number = "1";

let errorMessage: string | null = null;

// for union we can use union interfaces

// we can declare our own type for certain tasks
type ID = string;
interface UserInterface {
  id: ID; // a unique entitiy for clarity
  name: string;
  surname: string;
}

let user3: UserInterface | null = null;

//This is doesn't bring us any safate
let someProperty: string | number | null | undefined | string[] | object = null;

// const popularTags: string[] =["dragon", "coffee"]
type PopularTag = string; // this is an entitty
// we create an array of popularTags entities
const popularTags: PopularTag[] = ["dragon", "coffee"];

type MaybePopularTag = PopularTag | null;
// const dragonsTag: MaybePopularTag = []; //won't work

const dragonsTag: MaybePopularTag = "dragon";
