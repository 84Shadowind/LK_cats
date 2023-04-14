let myCat = {
  name: "Буська",
  age: 11,
  image: "https://avatars.mds.yandex.net/i?id=fe54d86c650c203523236b37120a0ef8a74cfb45-6998621-images-thumbs&n=13",
  favorite: false
}

let myCat2 = {
  name: "Комочек",
  favorite: true
}

const box = document.querySelector(".container")
function createCard (cat, el = box) {
    const card = document.createElement("div")
    card.className = "card"
    if(!cat.image) {
      card.classList.add("default")
    } else {
      card.style.backgroundImage = `url(${cat.image})`
    }
    const name = document.createElement("h3")
    name.innerText = cat.name
    const like = document.createElement("i")
    like.className = "fa-heart card_fav"
    like.classList.add(cat.favorite ? "fa-solid":
    "fa-regular")
    card.append(like, name)
    if (cat.age >= 0) {
      const age = document.createElement("span")
    age.innerText = cat.age
    card.append(age)
    }


    el.append(card)
}
createCard(myCat)
createCard(myCat2)

const user = "84Shadowind"
const path = `https://cats.petiteweb.dev/api/single/${user}`

fetch(path +"/show")
  .then(function(res) {
    console.log(res)
    if (res.statusText === "OK") {
      return res.json()
    }
  })
  .then(function(data) {
    for (let c of data) {
      createCard(c, box)
    }
  })
