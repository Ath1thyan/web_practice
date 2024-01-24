const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
const countLabel = document.getElementById("counterLabel");
let count = 0;

inc.onclick = function(){
    count++;
    countLabel.textContent = count;
}
dec.onclick = function(){
    count--;
    countLabel.textContent = count;
}

res.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
