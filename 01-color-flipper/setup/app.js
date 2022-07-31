const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector('.color')


btn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random(1) * colors.length)
    document.body.style.backgroundColor = colors[randomIndex]
    color.textContent = colors[randomIndex]
})