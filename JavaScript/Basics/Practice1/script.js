// alert("Hello");
console.log("Hello");
console.log(12344);
console.log(123.44);
console.log(true);
console.log(["hello","world"]);
console.log([12,10,15,45,78,9658,4581452,5]);
console.log({"name":"athi", "title":"Founder & CEO"})
console.log({name:"athi", title:"Founder & CEO"})
console.table({name:"athi", title:"Founder & CEO"})
console.error("custom sample error")
console.warn("custom sample error")
// console.clear()


console.time("for loop timer --> ")
for (i=0; i<10; i++){
    console.log(i)
}
console.timeEnd("for loop timer --> ")


if(true){
    let msg1 = "Let"
    const msg2 = "const"
    console.log(msg1 + " , " + msg2)
}
if(true){
    var msg = "Var"
}
console.log(msg);


var a = 10;
console.log(a)
var a = 20;
console.log(a)
console.log(typeof a)

let b = 10;
console.log(b)
b = 10;
console.log(b)
console.log(typeof b)

const c = {'car':"volvo", 'model': "XC90"}
console.table(c)
console.log(typeof c)
console.log(c.model)
c.model = "s60"
console.table(c)
console.log(c.model)


const s1 = Symbol() 
console.log(s1)
const s2 = Symbol()
console.log(s2)
console.log(s1==s2)
console.log(typeof s2)

console.log(Date())

var d = new Date()
console.log(d)
console.log(typeof d)


a = 25
console.log(a, typeof a)
a = String(a)
console.log(a, typeof a)

a = 25.87
console.log(a, typeof a)
a = String(a)
console.log(a, typeof a)

a = {
    "name" : "Athi",
    "title" : "Founder & CEO"
}
console.log(a, typeof a)
a = String(a)
console.log(a, typeof a)

a = true
console.log(a, typeof a)
a = String(a)
console.log(a, typeof a)

a = [25,45,58,75,47]
console.log(a, typeof a)
a = String(a)
console.log(a, typeof a)

a = "25"
console.log(a, typeof a)
a = Number(a)
console.log(a, typeof a)

a = false
console.log(a, typeof a)
a = Number(a)
console.log(a, typeof a)
a = true
console.log(a, typeof a)
a = Number(a)
console.log(a, typeof a)

a = "25.6"
console.log(a, typeof a)
a = Number(a)
console.log(a, typeof a)

a = "25.6"
console.log(a, typeof a)
a = parseInt(a)
console.log(a, typeof a)

a = "25.6"
console.log(a, typeof a)
a = parseFloat(a)
console.log(a, typeof a)

a = true
console.log(a, typeof a)
a = Number(a)
console.log(a, typeof a)


let a1 = 10
let a2 = 10
console.log(a1==a2, a1===a2, a1!=a2)

let a11 = 10
let a21 = "10"
console.log(a11==a21, a11===a21, a11!=a21)

let a111 = 10
let a211 = "10"
console.log(a111==a211, a111===a211, a111!=a211)

let a12 = 10
let a22 = 20
console.log(a12==a22, a12===a22, a12!=a22)


const age = 15
const vote = age >= 18 ? "Eligible" : "Not Eligible"
console.log(vote)

const age1 = 19
const vote1 = age1>=18?"Eligible":"Not Eligible"
console.log(vote1)


function hello(name){
    console.log("Hello " + name)
}
hello()

function hello(name){
    console.log("Hello " + name)
}
hello("Athi")

function hello1(name){
    const result = name ? name : "Stranger"
    console.log("Hello " + result)
}
hello1()

// function hello1(name){
//     const result = name ? name : "Stranger"
//     console.log("Hello " + result)
// }
hello1("athi")

// function hello1(name){
//     const result = name ? name : "Stranger"
//     console.log("Hello " + result)
// }
hello1(null)


const fun = () =>{
    return "Hai";
}
console.log(fun)
console.log(fun())

user = {"name":"Athi", "Position" : "CEO"}
console.log(user)
console.log(user.name)

const func = (user) =>{
    const name = user ? user.name : "No name"
    return "Hai " + name;
}
console.log(func)
console.log(func(user))


const avg = 90
const grade = avg >= 90 ? "A" : avg >= 80 ? "B" : "C"
console.log("Grade : " + grade)
const avg1 = 85
const grade1 = avg1 >= 90 ? "A" : avg1 >= 80 ? "B" : "C"
console.log("Grade : " + grade1)
const avg2 = 50
const grade2 = avg2 >= 90 ? "A" : avg2 >= 80 ? "B" : "C"
console.log("Grade : " + grade2)


// Bitwise operator
const b1 = 2    // 10
const b2 = 3    // 11
console.log(b1 & b2)
console.log(b1 | b2)
console.log(~b1)    // ~a = -a-1  ==> ~b1 == -b-1 = -2-1 = -3
console.log(b1 ^ b2)

let b3 = 12
let b4 = 24
b3 &= b4    // stores the bitwise AND value of b3 & b4 in b3
console.log(b3)

let b5 = 5
let b6 = 2
console.log(b5 << b6)
console.log(5 << 2)
console.log(b5 >> b6)
console.log(5 >> 2)
b5 <<= b6
console.log(b5)


//  Nullish coalescing operator
const e = null ?? 'No value'
console.log(e)

const e1 = null ?? 45
console.log(e1)

const users={'name' : 'Athi'}
console.log(users)
console.log(users.name)
users.city ??= 'Coimbatore'
console.log(users.city)
console.log(users)


let f = 5
f++
console.log(f)
f--
console.log(f)
console.log(f++) // post increment
console.log(++f) // pre increment
console.log(f--) // post decrement
console.log(--f) // pre decrement


