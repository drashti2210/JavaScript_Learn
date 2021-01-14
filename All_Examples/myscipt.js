
//Demo let & const
const w = "Hii";
let n = "Drashti";
var x = 34
console.log(n);
console.log(w);
console.log(x);
function demoLet() {
    let n = "Yash";
    const w = "H";
    x = 3
    console.log(n);
    console.log(w);
    console.log(x);
}
//w = 2 // ERROR
demoLet()
console.log(x);
console.log(n);
console.log(w);


// Scope & Closure
var g = "Hello world!"; // global scop
function demoGlobalScope() {
    console.log(g);
}
demoGlobalScope();
{
    let fName = "Drashti";
    var lName = "Tandel";
    console.log(fName + ' ' + lName);
}
//console.log(fName); // Error
console.log(lName);
function outer() {
    var firstName = "Drashti";
    function inner() {
        console.log(firstName);
    }
    inner();
}
outer();

// Arrow Function
const demo_arrow = (n) => {
   return n*n;
}
demo_arrow()

// destructuring data
let frut = { nm: "Apple", color: "red" };
let { nm, color } = frut;
console.log(`destructure: ${nm}`);
console.log(`destructure: ${color}`);

// callback practice
const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" }
]
get_Fruits();
function add_Fruit(fr, callback) {
    setTimeout(() => {
        fruits.push(fr);
        console.log("fruit added");
        callback();
    }, 1000);
}
function get_Fruits() {
    setTimeout(() => {
        console.log("fruit displayed");
        for (let c of fruits) {
            console.log(`Color of ${c.name} is ${c.color}`);
        }
    }, 3000)
}
let fr = { name: "orange", color: "orange" }
add_Fruit(fr, get_Fruits)

// Promise Practice
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const err = true;
            if (err) {
                console.log("Resolve: Your work is resolved");
                resolve();
            }
            else {
                console.log("Not Resolve: Your work is not resolved");
                reject();
            }
        }
            , 2000)
    })
}
func1().then(() => {
    console.log("Resolved");
}).catch(() => {
    console.log("Not Resolved");
})

// Use Promise instead of callback
function add_Fruit1(fr) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            fruits.push(fr);
            console.log("fruit added");
            let err = true;
            if (err) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);
    })
}
let frt = { name: "pears", color: "green" }
add_Fruit1(frt).then(get_Fruits).catch(() => {
    console.log("Error occured");
})


//async await
async function myFetch() {
    let response = await fetch('p1.jpg');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response;
    }
}
myFetch().then((data) => {
    console.log(data);
}).catch(e => console.log(e));


console.log("EventLoop demo start");
setTimeout(function () {
    console.log("In setTimeout");
}, 8000);
fetch("https://api.github.com/users").then(() => {
    console.log("fetch-then")
}).catch(e => console.log(e))

console.log("EventLoop demo end");

