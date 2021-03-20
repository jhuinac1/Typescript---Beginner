// If we don't provide argument type - it will be (any),
// it was mentioned that any is not a good approach.
// Thus we can implement generics
// All generic data types are written inside"<>"
// Here we can be more especific by creating an interface
const addId = <T extends object>(obj: T) => {
  // <-we ar also setting the default generic type here (T extends object)
  const id: string | number = Math.random().toString(16);
  return {
    //spread is ES6 feature to merge objects
    ...obj,
    id,
  };
};

// Generics in interfaces
// we must provide genetic type if there is no default
// we can pass more than 1 generic
interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: "JacK",
  data: {
    meta: "hello",
  },
  meta: "Hello",
};

const user2: UserInterface<string[], number> = {
  name: "John",
  data: ["bar", "foo", "some Data"],
  meta: 2,
};

// Explicit declarations are easier to read
const result = addId<UserInterface<{ meta: string }, string>>(user);
console.log(result);

// const updateArray = append<string> ("bazz", ["foo","bar"]);
