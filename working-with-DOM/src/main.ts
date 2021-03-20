// Typescript has lots of types for DIOM out of the box
// document is of type : Document,
// QuerySelector is of type: Element
// ELEMENT: is the highest class in hierarchy
//Typescript doesn't know anything about markup, so it doesn't
// parse our markup

const someEl = document.querySelector(".foo");

// By asserting to Any: we disable typescript support.
// We should never do this. thus we would change our element to
// not be Generic
console.log("Some Element", (someEl as any).value);

// The best apporach
// we specify the element that we working on instead of generic
const someOtherElement = document.querySelector(".foo") as HTMLInputElement;

console.log("SomeOtherlement: ", someOtherElement.value);

// ADDING A LISTENER

someEl.addEventListener("blur", (event) => {
  // console.log("event", event.target.value); // this is wrong because is generic, so we typescript doesn't know

  //we declare the specific type
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
