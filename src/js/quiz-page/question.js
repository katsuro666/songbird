import birdsData from "./helpers/birdsData";
import getRandomInt from "./helpers/getRandomInt"
import shuffle from "./helpers/shuffleArray"

let picture = document.querySelector('.question__picture')
let name = document.querySelector('.question__name')
let player = document.querySelector('.question__player')


let typeOfBirdIndex = 0


function randomBird() {
  return birdsData[typeOfBirdIndex][getRandomInt(0, 5)]
}
let bird = randomBird(typeOfBirdIndex)
let birdSound = bird.audio
player.src = birdSound

console.log(bird)

function showGuessedBird() {
  picture.style.backgroundImage = `url(${bird.image})`
  name.textContent = bird.name
}

export {typeOfBirdIndex, bird, showGuessedBird}