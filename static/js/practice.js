function printHello() {
    return "Hello there!";
}

// Arrow function for above
sayHello = () => "Hello!";

// Takes two numbers and adds them
function addition(x, y) {
    return x + y;
}

// Arrow function for abov addition
addTwo = (a, b) => a + b;

// Function calling another function
function doubleAddition(p, q) {
    var total = addition(p, q) * 2;
    return total;
}

//function to loop thru a list
function loopList(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

//Arrow function for doubleAddition
doubleAdd = (x, y) => addTwo(x, y) * 2;

//Arrow function to return square of a number
squared = (a) => a ** 2;

//Test the above functions
console.log(printHello());
console.log(sayHello);
console.log(sayHello());

console.log(addition(4, 5));
console.log(addTwo(23, 12));

console.log(doubleAddition(3, 4));
console.log(doubleAdd(4, 6));

console.log(squared(25));

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
loopList(friends);
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
loopList(vegetables);

//Practice foreach 
let numbers = [1, 2, 3, 4, 5, 6];
//forEach takes callback function as arg (callback fn is performed on each element of array)
// callback function itself is a function with a parameter and performs logic
//callback can be anonymous function or arrow function
numbers.forEach(function (element) {
    // console.log(element ** 2);
})

// Use arrow function in forEach
numbers.forEach(number => {
    console.log(number ** 3);
});

