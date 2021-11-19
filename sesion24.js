/* 
for (var i=o; i<10; i++){
    alert(i)
}
*/
/*
let text = "";
for (let i=0; i<10; i++){
    text +=i+ "<br>";
}
Document.getElementById("demo").innerHTML =text;
*/

const cars = ["BMW", "VOLVO", "Saab","Ford","Fiat","Audi"];
let text="";
for (let i=0; i<cars.length; i++) {
    text +=cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

