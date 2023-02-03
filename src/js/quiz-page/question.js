import birds from "./helpers/birdsData";
import getRandomInt from "./helpers/getRandomInt"

let picture = document.querySelector('.question__picture')
let name = document.querySelector('.question__name')
let player = document.querySelector('.question__player')

let typeOfBirdIndex = 0

function randomBird() {
  return birds[typeOfBirdIndex][getRandomInt(0, 5)]
}
let bird = randomBird(typeOfBirdIndex)
let birdSound = bird.audio
player.src = birdSound

console.log(bird)

// delete later
name.textContent = bird.name
// delete later

export {typeOfBirdIndex, bird}