// document.getElementById("myH1").textContent=`hello`;
// document.getElementById("myP").textContent='i like pizza';

let username;
// username = window.prompt("enter your username");
// console.log(username);

document.getElementById("mysub").onclick = function(){
    username = document.getElementById("mytxt").value;
    console.log(username);
    document.getElementById("hell").textContent = `Hello ${username}`
}