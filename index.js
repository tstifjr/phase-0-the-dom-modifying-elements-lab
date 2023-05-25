
let element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");

let body = document.querySelector("body");

//body.style.backgroundColor = "#1a3";
newHeader.id = "victory";
/*newHeader.style.textAlign = "center";
newHeader2.style.color = 'blue';
*/

newHeader.textContent= "TJ is the champion";
body.append(newHeader);
