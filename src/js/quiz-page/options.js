import birdsData from "./helpers/birdsData";
import shuffle from "./helpers/shuffleArray"
import {typeOfBirdIndex, bird, showGuessedBird} from './question'
import showDesc from './description'


let options = document.querySelectorAll('.options__el')
let descInvitation = document.querySelector('.description__invitation')
let descWrapper = document.querySelector('.description-wrapper')

let concatArr = birdsData[typeOfBirdIndex].concat()
let arrOfCurrTypeBirds = shuffle(concatArr)

options.forEach(item => {
  item.textContent = arrOfCurrTypeBirds[0].name
  arrOfCurrTypeBirds.shift()

  item.addEventListener('click', () => {
    descInvitation.classList.add('visually-hidden')
    descWrapper.classList.remove('visually-hidden')
    showDesc(item.textContent)

    if (item.textContent === bird.name) {
      item.classList.add('--right')
      showGuessedBird()
    } else {
      item.classList.add('--wrong')
    }
  })
})