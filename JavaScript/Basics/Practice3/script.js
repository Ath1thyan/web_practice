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


