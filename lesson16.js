function changeByValue(b) {
    b = 2;
}
var a = 1;
changeByValue(a);
console.log(a);


//change by reference

function changeByRef(obj) {
    obj.prop1 = function () {

    }
    obj.prop2 = {};
    obj.d = 100;
}
 var c = {};
c.prop1 = {};
changeByRef(c);
console.log(c);