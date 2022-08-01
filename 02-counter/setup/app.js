let count = document.getElementById("value")
let countValue = 0;
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")

function redOrGreen() {
    let color = "#222"
    if (countValue < 0) {
        color = "red"
    } else if(countValue > 0){
        color = "green"
    }
    return color;
}

increase.addEventListener("click", function(){
    countValue++;
    count.innerText = countValue
    count.style.color = redOrGreen();
})

decrease.addEventListener("click", function(){
    countValue--;
    count.innerText = countValue
    count.style.color = redOrGreen();
})

reset.addEventListener("click", function(){
    countValue = 0;
    count.innerText = countValue
    count.style.color = redOrGreen();
})


