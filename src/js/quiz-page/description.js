import birdsData from "./helpers/birdsData";
import {typeOfBirdIndex} from './question'

let descImg = document.querySelector('.desc__img')
let descName = document.querySelector('.desc__name')
let descLatinName = document.querySelector('.desc__name-latin')
let descPlayer = document.querySelector('.desc__player')
let descText = document.querySelector('.description__text')

export default function showDesc(bird) {
  for (let i = 0; i < birdsData[typeOfBirdIndex].length; i++) {
    if (birdsData[typeOfBirdIndex][i].name === bird) {
      descImg.style.backgroundImage = `url(${birdsData[typeOfBirdIndex][i].image})`
      descName.textContent = birdsData[typeOfBirdIndex][i].name
      descLatinName.textContent = birdsData[typeOfBirdIndex][i].species
      descPlayer.src = birdsData[typeOfBirdIndex][i].audio
      descText.textContent = birdsData[typeOfBirdIndex][i].description
    }
  }
}