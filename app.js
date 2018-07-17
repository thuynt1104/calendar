// function test() {
//     console.log("TESTTTT!")
// }
//
// test();
//
// function logSaying(fn) {
//     fn();
// }
// logSaying(test);
//
// var sayGoodbye = function () {
//     console.log("Goodbye");
// };
//
// sayGoodbye();

var sayHello = require("./hello.js");
sayHello();

var person = {
    firstName: "Hoa",
    lastName: "Mai",
    sayHello: function () {
        console.log("Hello, " +  this.firstName + " "  + this.lastName);
    }
}

person.sayHello();

var keyName = "firstName";

console.log(person[keyName]);

console.log(person["firstName"]);