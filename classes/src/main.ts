// IN java script we have support for classes starting from
// ECMAScript 6 :
// CLASSES is sugar for prototypes. thus classes are not really classes.

//We can define an interface, and then our class can implement it

interface UserInterface {
  getFullName(): string;
}
class User implements UserInterface {
  //Everything is public by default
  // in typescript we can define public, private, protected.
  protected firstName: string;
  private lastName: string;

  //Readonly in TypeScript : We cannot change the value,
  // even with methods.
  readonly unchangeableName: string;

  // static properties:
  // static are only accessed in the class itself, not on intances
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  changeUnchangeableName(): void {
    //   this.unchangeableName = "foo";
  }
}

const user = new User("Johnny", "Huinac");

console.log(user.getFullName());
//for static we cannot accesses it on intances, only the class itself,
//thus we can use this:
console.log(User.maxAge);

//INHERITANCE IN TYPESCRIPT
class Admin extends User {
  //we can override or provide new methods
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}

const admin1 = new Admin("foo", "bar");
console.log(admin1.getFullName());
admin1.setEditor("hey");
console.log(admin1.getEditor());
