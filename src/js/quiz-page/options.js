import birdsData from "./helpers/birdsData";
import shuffle from "./helpers/shuffleArray"
import {typeOfBirdIndex, bird, showGuessedBird} from './question'


let options = document.querySelectorAll('.options__el')
let descInvitation = document.querySelector('.description__invitation')
let descWrapper = document.querySelector('.description-wrapper')

let arrOfCurrTypeBirds = shuffle(birdsData[typeOfBirdIndex])

// console.log(arrOfCurrTypeBirds)

options.forEach(item => {
  item.addEventListener('click', () => {
    descInvitation.classList.add('visually-hidden')
    descWrapper.classList.remove('visually-hidden')
    if (item.textContent !== bird.name) {
      item.classList.add('--wrong')
    } else {
      item.classList.add('--right')
      showGuessedBird()
    }
  })
  item.textContent = arrOfCurrTypeBirds[0].name
  arrOfCurrTypeBirds.shift()
})