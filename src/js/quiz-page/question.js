import birdsData from "./helpers/birdsData";
import getRandomInt from "./helpers/getRandomInt";
import {nextLvlBtn} from './next-lvl-btn';

let guessedPicture = document.querySelector('.question__picture--guessed')
let name = document.querySelector('.question__name')
let player = document.querySelector('.question__player')

let typeOfBirdIndex = 0

function randomBird() {
  return birdsData[typeOfBirdIndex][getRandomInt(0, 5)]
}
let bird = randomBird()
let birdSound = bird.audio
player.src = birdSound

function setRandomBird() {
  bird = birdsData[typeOfBirdIndex][getRandomInt(0, 5)]
  birdSound = bird.audio
  player.src = birdSound
}

function showGuessedBird() {
  guessedPicture.classList.remove('visually-hidden')
  guessedPicture.style.backgroundImage = `url(${bird.image})`
  name.textContent = bird.name
}

nextLvlBtn.addEventListener('click', () => {
  typeOfBirdIndex++
  setRandomBird()
  guessedPicture.classList.add('visually-hidden')
  name.textContent = '******'
})

function setNewGame() {
  typeOfBirdIndex = 0
  setRandomBird()
  name.textContent = '******'
  guessedPicture.classList.add('visually-hidden')
}

export {typeOfBirdIndex, bird, showGuessedBird, setNewGame}