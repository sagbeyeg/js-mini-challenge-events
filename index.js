/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("#header")

header.addEventListener("click", event => {
  toggleColor(header)
})


/***** Deliverable 2 *****/
const playerForm = document.querySelector("#new-player-form")

playerForm.addEventListener("submit", function(e) {
  e.preventDefault()

  const form = e.target
    playerObj = {
      number: form.number.value,
      name: form.name.value,
      nickname: form.nickname.value,
      photo: form.photo.value,
      likes: 0
    }

  form.reset()
  renderPlayer(playerObj)
})


/***** Deliverable 3 *****/


function addALike() {
  document.addEventListener("click", function(e) {
    if (e.target.matches('.like-button')) {
      const player = e.target.parentElement
      // console.log(player)
      const likes = player.querySelector('.likes')
      // console.log(likes)
      const currentLikes = parseInt(likes.innerHTML)
      // console.log(currentLikes)
      const newLikes = currentLikes + 1
      // console.log(newLikes)

      likes.innerHTML = newLikes + " likes"
    }
  })
}

addALike()