import birdsData from "./helpers/birdsData";
import shuffle from "./helpers/shuffleArray"
import {typeOfBirdIndex, bird, showGuessedBird} from './question'
import showDesc from './description'
import {nextLvlBtn} from './next-lvl-btn'
import {countScore} from './score'
import {correctAnswer, wrongAnswer} from './helpers/audio'


let options = document.querySelectorAll('.options__el')
let descInvitation = document.querySelector('.description__invitation')
let descWrapper = document.querySelector('.description-wrapper')
let player = document.querySelector('.question__player')

let concatArr = birdsData[typeOfBirdIndex].concat()
let arrOfCurrTypeBirds = shuffle(concatArr)

let points = 5

function answerSelected() {
  descInvitation.classList.add('visually-hidden')
  descWrapper.classList.remove('visually-hidden')
  showDesc(this.textContent)

  if(!this.classList.contains('--wrong') && !this.classList.contains('--right')) {
    if (this.textContent === bird.name) {
      this.classList.add('--right')
      showGuessedBird()
      countScore(points)
      player.pause()
      points = 5
      nextLvlBtn.disabled = false
      nextLvlBtn.classList.remove('--disabled')
      correctAnswer()
    } else {
      this.classList.add('--wrong')
      wrongAnswer()
      if (points > 0) {
        points--
      } else {
        points = points
      }
    }

  }


}

function setOptions() {
  options.forEach(item => {
    item.textContent = arrOfCurrTypeBirds[0].name
    arrOfCurrTypeBirds.shift()
    item.addEventListener('click', answerSelected)
  })
}

function clearOptions() {
  options.forEach(item => {
    item.classList.remove('--wrong')
    item.classList.remove('--right')
    item.removeEventListener('click', answerSelected)
  })
}

function setNewGameOptions() {
  clearOptions()
  concatArr = birdsData[typeOfBirdIndex].concat()
  arrOfCurrTypeBirds = shuffle(concatArr)
  setOptions()
  descInvitation.classList.remove('visually-hidden')
  descWrapper.classList.add('visually-hidden')
}

nextLvlBtn.addEventListener('click', () => {
  concatArr = birdsData[typeOfBirdIndex].concat()
  arrOfCurrTypeBirds = shuffle(concatArr)
  clearOptions()
  setOptions()
})

setOptions()

export {setNewGameOptions}