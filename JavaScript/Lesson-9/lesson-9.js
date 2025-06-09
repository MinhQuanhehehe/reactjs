const roll = document.getElementById("Roll");
const display = document.getElementById("button1");
let ten;

function Hello(string, callback) {
    document.getElementById("yourname").textContent = string;
    callback();
}
function Goodbye() {
    document.getElementById("GOODBYE").textContent = "GOODBYE";
}

roll.onclick = function () {
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let z = Math.floor(Math.random() * 6 + 1);
    document.getElementById("result").textContent = `${x}  ${y}  ${z}`;
}

display.onclick = () => {
    ten = document.getElementById("name").value;
    Hello(ten, Goodbye);
}


