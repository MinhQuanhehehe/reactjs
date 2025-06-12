const dices = document.getElementById("dices");
const roll = document.getElementById("roll");


function rollDice() {
    let amount = Number(dices.value);
    let imagestring = "";
    let image = [];
    let valuestring = "";
    let value = [];
    const result = document.getElementById("result");
    const resultImg = document.getElementById("result-images");
    for (let i = 1; i <= amount; i++) {
        let rand = Math.floor(Math.random() * 6) + 1;
        value.push(rand);
        image.push(`dice/${rand}.png`);
    }
    for (let i = 0; i < value.length; i++) {
        if (i == value.length - 1) {
            valuestring += value[i];
        }
        else {
            valuestring += value[i] + ", ";
        }
    }
    for (let i = 0; i < value.length; i++) {
        imagestring += `<img src="${image[i]}" alt="Dice ${i + 1}" style="width:150px; margin:10px;">`
    }
    console.log(image);
    console.log(value);
    result.textContent = valuestring;
    resultImg.innerHTML = imagestring;
}
roll.onclick = rollDice;
