// What are enums
// these are enumerables and are popular in static type languages

/**
 * 
 const statuses = {
     notStarted: 0,
     inProgress: 1,
     done: 2
    }
    
    console.log(statuses.inProgress);
*/

// we can write the same code above with enumberables.

// enum -  a reserved word to create enumerable

// we start enum with uppercase like Interfaces
enum StatusEnum {
  //Names with capital letter is a default code style

  //Here the values are incremented from zero
  NotStarted,
  InProgress,
  Done,
}
console.log(StatusEnum.InProgress); //1
console.log(StatusEnum.NotStarted); //0
console.log(StatusEnum.Done); //2

// we can use enum as a value and a data type
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);

// using enum with values as 0,1,2 is not as useful,
// so we can assign values, typically strings;
// we can add values the same way as we do with objects,
// the main difference is that we use "=" sign instead;

enum Status2Enum {
  NotStarted = "not started",
  InProgress = "in Progress",
  Done = "Done",
}

let notStartedStatus2: Status2Enum = Status2Enum.NotStarted;
notStartedStatus2 = Status2Enum.Done;
console.log(notStartedStatus2);

//we can use enums with interfaces.
// is recommended to use enums for all constants in applications
interface Task {
  id: string;
  status: StatusEnum;
}
