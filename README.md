# TYPESCRIPT

## Validate javascript with static type checking

## WHY DO YOU NEED TYPESCRIPT?

## Javascript is:

- a dinamically type language. (It breaks only on runtime)
- good for beginner or medium sized applications
- Difficult to scale

## WHAT IS TYPESCRIPT

- it is an extenstion to javascript. the most popular static type extension for javascript
- Provides safety that javascript cannot give us
- We see errors in the interface, editor, console.
- Minimizes the runtime errors
- Help us to work with entities.
- Better for architectures and datatypes
- typescript behaves like a compile language where javascript is the compilation target
  It is a superset of javascript. You can apply everything learned in javascript, but addionally provides data types.

### Typescript cannot be run directly inside browsers,

Typescript needs to be transpiled into JavaScript.
We can think of typescript as something like babel.

# Installation

### Node.js > version 10

Global configuration

```
$ npm install -g typescript
```

Typescript into project (devDependencies)

```
$ npm install typescript --save-dev
```

# CONFIGURATION

typescriptlang.org to read more about it

configuring small file for typescript

- Create a new file -> tsconfig.json

Better structure for our source file and output

```
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```
