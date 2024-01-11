let mapp = new Map(
    [
        ['apple', 100],
        ["orange", 200],
        ["cherry", 300]
    ]
);
let txt = ""
for (const t of mapp){
    txt += t + "\n"
    console.log(txt)
}
console.log(txt)
console.log(typeof txt)

const set1 = new Set(["a", "b", "c"]);
console.log("set.values() --> " + set1.values())

const set2 = new Set (['a', 'b', 'c', 'd'])
let txt2 = ""
for (const i of set2.values()){
    txt2+=i;
}
console.log(txt2)


function add(a,b){
    return a+b;
}
console.log(add(12,12))


function sum(){
    let total = 0;
    for (let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum)
console.log(sum(12,12,12,12))

function total(...args){
    let total = 0;
    for (let i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
}
console.log(total)
console.log(total(12,12,12,12))

const ad = function(a,b){
    return a+b;
}
console.log(ad)
console.log(ad(5,10))

const addd = (a,b) => { return a+b; }
console.log(addd)
console.log(addd(10,2))

let tot=0
const addd1 = (...args) => { for(let i=0; i<args.length; i++){ tot+=args[i]} return tot; }
console.log(addd)
console.log(addd(1,2,3))

let num = [1,2,3,4,5,6]
console.log(num)
let num1 = num.map(num => num*2)
console.log(num1)

let num2 = [1,2,3,4,5,6]
console.log(num)
let num3 = num.map(numb => numb*2)
console.log(num3)

let frt = ['apple','banana','cherry','kiwi','grape','orange']
console.log(frt)
const frt1 = frt.filter(fruit => fruit.length > 5)
console.log(frt1)