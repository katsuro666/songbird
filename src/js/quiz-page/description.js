import birdsData from "./helpers/birdsData";
import {typeOfBirdIndex} from './question'

let descImg = document.querySelector('.desc__img')
let descName = document.querySelector('.desc__name')
let descLatinName = document.querySelector('.desc__name-latin')
let descPlayer = document.querySelector('.desc__player')
let descText = document.querySelector('.description__text')

let arrOfCurrTypeBirds = birdsData[typeOfBirdIndex]


console.log(arrOfCurrTypeBirds)

export default function showDesc(bird) {
  for (let i = 0; i < arrOfCurrTypeBirds.length; i++) {
    if (arrOfCurrTypeBirds[i].name === bird) {
      descImg.style.backgroundImage = `url(${arrOfCurrTypeBirds[i].image})`
      descName.textContent = arrOfCurrTypeBirds[i].name
      descLatinName.textContent = arrOfCurrTypeBirds[i].species
      descPlayer.src = arrOfCurrTypeBirds[i].audio
      descText.textContent = arrOfCurrTypeBirds[i].description
    }
  }
}