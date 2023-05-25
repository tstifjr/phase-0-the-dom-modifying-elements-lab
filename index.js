
let element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");
console.log(newHeader)

newHeader.id = "victory";

newHeader.textContent= "TJ is the champion";
console.log(newHeader)
newHeader.innerText= "Megan is the champion";
console.log(newHeader)