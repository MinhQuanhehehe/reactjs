const button = document.getElementById("total");
const button1 = document.getElementById("total1");

let output = "";
function print() {
    let text = document.getElementById("textbox").value;
    let number = text.split(" ").map(Number);
    console.log(number);
    let total = number.reduce(getTotal);
    document.getElementById("result").textContent = total;
    number.forEach(filler);
    output = number.reduce(getTotal);    
    console.log(number);
    document.getElementById("array").textContent = `From array [ ${output}]`;
    
}
function filler (element, index, array) {
    array[index] = String(element) + " ";
}
function stringConvert (index, array) {
    output += array[index] + " ";
}
function getTotal(pre, next) {
    let total = pre + next;
    return total;
}
function printWithFilter () {
    let text = document.getElementById("textbox").value;
    let number = text.split(" ").map(Number);
    console.log(number);
    let newArr = number.filter(isEven);
    let total = newArr.reduce(getTotal);
    document.getElementById("result").textContent = total;
    number.forEach(filler);
    output = number.reduce(getTotal);    
    console.log(number);
    document.getElementById("array").textContent = `From array [ ${output}]`;
    
}
function isEven (element) {
    return element % 2 === 0;
}
button.onclick = print; 
button1.onclick = printWithFilter;
