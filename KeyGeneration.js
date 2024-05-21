var Code = Math.floor(Math.random() * 90000000000000000) + 10000000000000000;
// Test the function
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var random_letter = letters.charAt(Math.floor(Math.random() * letters.length));
var Starter = "OTS/"
var Key = ""+ Starter + "" + Code + "" + random_letter + " "
console.log(Key)
document.getElementById("copyText").value = Key
conssole.log("key has ben made and set ")
console.log("why are you on the dev console on my site dont try no funny shit - ots")
