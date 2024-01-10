// let a = prompt("Enter the age : ")
// console.log(a)
let a = 20
if (a != null && a > 18){
    console.log("Eligible")
}
else if(a == 18){
    console.log("First time to vote")
}
else{
    console.log("Not Eligible")
}


let num = 2
switch(num){
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    default:
        console.log("default")
}


let letter = 'b'
switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter + " is vowel")
        break
    default : 
        console.log(letter + " is a consonant")
}


let i = 1
while (i<=10){
    console.log(i)
    i++
}


let table = 2; times = 5; init = 1;
do{
    console.log(table + " X " + init + " => " + (table * init));
    init ++;
}
while(init <= times)


for (let i=1; i<=10; i++){
    console.log(i)
}

let arr = []
for (let i=0; i<100; i++){
    arr.push(i)
}
console.log(arr)

let arr1 = []
for (let i=0; i<100; i+=2){
    arr1.push(i)
}
console.log(arr1)
console.log(arr1[5])


let arr2 = []
for(let i=0; i<3; i++){
    arr2.push([])
    for(let j=0; j<3; j++){
        arr2[i].push(j)
    }
}
console.log(arr2)
console.table(arr2)


let arr3 = ['Athi', 'raj', 'sam', 'BMW']
console.log("For loop : ")
for (let i=0; i<arr3.length; i++){
    console.log(arr3[i])
}
console.log("For of loop : ")
for (let ar of arr3){
    console.log(ar)
}


console.log("For in loop : ")
let cars = {
    Brand : "Volvo",
    Model : "XC90",
    Color : "Black"
}
for (let c in cars){
    console.log(c + " : " + cars[c])
}

let arr_keys = Object.keys(cars)
console.log(arr_keys)
let arr_val = Object.values(cars)
console.log(arr_val)


let grp = [
    ['Ravi', 'Sam', 'Ram'],
    ['Kumar', 'Tiya', 'Sundar'],
    ['Rajesh', 'Sara', 'Ragul']
]
for (let group of grp){
    console.log(group)
}

for (let group of grp){
    for (let g of group){
        console.log(g)
    }
}

console.log("starts with R : ")
for (let group of grp){
    for (let g of group){
        if(g.startsWith('R')){
            console.log(g)
        }
    }
}

console.log("print first only element starts with R : ")
for (let group of grp){
    label:
    for (let g of group){
        if(g.startsWith('R')){
            console.log(g)
            break label
        }
    }
}


