const enter = document.getElementById("enter");
const days = document.getElementById("days");
const day = document.getElementById("day");

const toC = document.getElementById("toC");
const toF = document.getElementById("toF");
const submit = document.getElementById("submit");
const temp = document.getElementById("temp");

enter.onclick = function () {
    switch (Number(days.value)) {
        case 1 : day.textContent = `Monday`; break;
        case 2 : day.textContent = `Tuesday`; break;
        case 3 : day.textContent = `Wednesday`; break;
        case 4 : day.textContent = `Thursday`; break;
        case 5 : day.textContent = `Friday`; break;
        case 6 : day.textContent = `Saturday`; break;
        case 7 : day.textContent = `Sunday`; break;
        default : day.textContent = `Invalid Input`; break;
    }
}

submit.onclick = function () {
    if (toC.checked) {
        let resultC = Number(temp.value);
        console.log(resultC);
        document.getElementById("result").textContent = (resultC * 9/5 + 32).toFixed(1) + "°C";
    }
    else if (toF.checked) {
        let resultF = Number(temp.value);
        document.getElementById("result").textContent = ((resultF - 32) * 5/9).toFixed(1) + "°F";
    }
    else {
        document.getElementById("result").textContent = `Please select an Unit`;
    }
}
