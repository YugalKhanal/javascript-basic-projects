const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn")
const color = document.querySelector('.color')

btn.addEventListener("click", function() {
    let hexValue = "#"
    for (let i = 0; i < 6; i++) {
        hexValue += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexValue
    color.textContent = hexValue
})

function getRandomNumber(){
    let randomIndex = Math.floor(Math.random(1) * hex.length)
    return randomIndex;
}