// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn = document.querySelector(".prev-btn")
const forwardBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let personImg = document.getElementById("person-img")
let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info")

let index = 0;

function updateText(index){
  author.innerText = reviews[index].name
  job.innerText = reviews[index].job
  info.innerText = reviews[index].text
  personImg.src = reviews[index].img
}

updateText(0)

randomBtn.addEventListener ("click", function(){
  let index = Math.floor(Math.random(1) * 4)
  updateText(index)
  console.log(index)
})

prevBtn.addEventListener("click", function(){
  if (index === 0){
    index = reviews.length - 1
    updateText(index)
    console.log(index)
  } else {
    index--
    updateText(index)
    console.log(index)
  }
})

forwardBtn.addEventListener("click", function(){
  if (index === reviews.length - 1){
    index = 0
    updateText(index)
    console.log(index)
  } else {
    index++
    updateText(index)
    console.log(index)
  }
})
