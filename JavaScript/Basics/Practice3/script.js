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


console.log(num)
// let num4 = num.reduce((num4, num) => num4+num, 0)
// let num4 = num.reduce((sum, number) => sum + number, 0)
// let num4 = num.reduce((num4, num) => num4+num, 5)   // =26  --> sum of the array + 5
let num4 = num.reduce((num4, num) => num4+num, 2)    // =23
console.log(num4)


let counter_fun = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
};
let counter = counter_fun();
console.log(counter())
console.log(counter)
console.log(counter())
console.log(counter())


// ################# call back function ################### //

// function call_back_fun(){
//     console.log("callback function")
// }
// function higher_order_fun(call_back_fun){
//     call_back_fun();
// }
// higher_order_fun(call_back_fun);

function call_back_fun(){
    console.log("callback function")
}
function higher_order_fun(anything){
    anything();
}
higher_order_fun(call_back_fun);

setTimeout(function(){
    console.log("set time out function")
}, 3000)

// setInterval(function(){
//     console.log("set time interval function")
// }, 3000)

const numbers = [1,2,3,4]
numbers.forEach(function(numbr){
    console.log(numbr)
})

numbers.forEach((val , ind) =>{
    console.log("index " + ind + " value " + val)
})



const data = [
    {"photobg": "#ffcc00","title": "waterproof Mobile Phone","stars":"⭐⭐⭐⭐⭐", "properties":["12MP TrueDepth front camera", "Battery life: up to 22hours of video playback", "5G and Gigabit LTE"], "color": ["#000000","#00ff00","#0000ff"],"cost":"$20", "dcost":"$450"},
  
    {"photobg": "#ffcc00","title": "Smartphone Dual Camera","stars":"⭐⭐⭐⭐", "properties":["32MP TrueDepth front camera", "Battery life: up to 22hours of video playback", "5G and Gigabit LTE"], "color": ["#0000ff","#ff0000","#fff00"],"cost":"$20", "dcost":"$240"},
    
    {"photobg": "#ffcc00","title": "Black Colour Smartphone","stars":"⭐⭐⭐⭐⭐", "properties":["Face ID for Secure authentication", "LiDAR Scanner for Night mode", "5G and Gigabit LTE"], "color": ["#0000ff","#ff0000","#000000"],"cost":"$20", "dcost":"$450"}, 
    
    {"photobg": "#ffcc00","title": "Latest Smartphone Under 2000","stars":"⭐⭐⭐⭐", "properties":["20MP TrueDepth front camer", "LiDAR Scanner for Night mode", "Compatible with MagSafe accessories"], "color": ["#0000ff","#ff0000","#000000"],"cost":"$20", "dcost":"$450"},
    
    {"photobg": "#ffcc00","title": "New Phone Max pro","stars":"⭐⭐⭐⭐⭐", "properties":["2MagSafe and Qi wire charging", "A15 Bionic Chip with new 6-core CPU", "Compatible with MagSafe accessories"], "color": ["#0000ff","#ff0000","#000000"],"cost":"$20","dcost":"$390"},
    
    {"photobg": "#ffcc00","title": "Smart Phone pro +256","stars":"⭐⭐⭐⭐", "properties":["13.7cm (5.4 inch) Super Retina HDR and True Tone", "Battery life: up to 22hours of video playback", "Compatible with MagSafe accessories"], "color": ["#0000ff","#fff00","#0000ff"],"cost":"$20", "dcost":"$390"}
  ]

  data.forEach((value) => {
    console.log(value.title)
  })

