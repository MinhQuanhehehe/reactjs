/* console.log(`HELLO`);
console.log(`TOI YEU SON TUNG MTP`);

window.alert('SON TUNG SO 1 VIET NAM');
window.alert('WELCOME TO THE LIEMS, J97');
*/

/*document.getElementById("head").textContent = `THA TIM CHO JACK`;
document.getElementById("so1").textContent = `5000000`;

let x;
x = 100;
console.log(x)
let y;
*/
const decrease = document.getElementById("lay1tim");
const increase = document.getElementById("thatim");
const takeall = document.getElementById("layall");
const takeahalf =document.getElementById("takeahalf");
const double = document.getElementById("double");
const sotim = document.getElementById("so1");
const cal = document.getElementById("tinh");


let count = 0;
let tuoi;

decrease.onclick = function() {
    count--;
    sotim.textContent = count;
}
increase.onclick = function() {
    count++;
    sotim.textContent = count;
}
takeall.onclick = function() {
    count=0;
    sotim.textContent = count;
}
takeahalf.onclick = function() {
    count = count / 2;
    sotim.textContent = count;
}
double.onclick = function() {
    count = count * 2;
    sotim.textContent = count;
}
cal.onclick = function() {
    tuoi = document.getElementById("tuoi").value;
    window.alert(`Ban da ${tuoi} tuoi roi`);
}

