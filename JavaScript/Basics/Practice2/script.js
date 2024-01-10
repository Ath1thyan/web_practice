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