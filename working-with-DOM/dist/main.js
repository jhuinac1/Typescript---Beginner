var someEl = document.querySelector(".foo");
console.log("Some Element", someEl.value);
var someOtherElement = document.querySelector(".foo");
console.log("SomeOtherlement: ", someOtherElement.value);
someEl.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
