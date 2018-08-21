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

// ke thua prototype
function Person(name, password) {
    this.name = name;
    this.password = password;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getPass = function () {
    return this.password;
}

Person.prototype.getLevel = function () {
    return this.level;
}

Person.prototype.level = 'admin';

function User(name) {
    this.name = name;
}

User.prototype = new Person();
var person = new Person("user1", "abc");
var user = new User('user2', 'dxy');

console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPass());
console.log(person.getName());

Date.prototype.vnFormat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth()+1;
    var dd = this.getDay();
    return dd +"/"+ mm + "/" + yyyy;
}

var date = new Date();
var vnd = new Date(2014,12,1);

console.log(date.vnFormat());
console.log(vnd.vnFormat());
