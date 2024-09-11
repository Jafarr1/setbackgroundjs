console.log("Jeg er i set backround color")

function setBackroundColor(){
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}


let inpColorValue = document.querySelector(".inpColorValue")
let inpColorPicker = document.getElementById("inpColorPicker")

let inp = document.querySelector(".inpColor");
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "Tryk mig for at sætte color"


let bdy = document.querySelector("body")
console.log(bdy)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

let pTagArr =Array.from(pTags);
console.log("pTagArr")
console.log(pTagArr)
pTagArr.forEach(p => p.textContent = "hej fra foreach");

pbCol.addEventListener('click', setBackroundColor);

document.addEventListener('keyup', setBackroundColor);
pbCol.addEventListener('click', useColorPicker);

document.addEventListener('keyup', useColorPicker);
