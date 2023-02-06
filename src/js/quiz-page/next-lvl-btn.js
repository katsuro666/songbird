import {typeOfBirdIndex} from './question'
import {showFinal} from '../result-page/final'


let nextLvlBtn = document.querySelector('.next-lvl-btn')
let descWrapper = document.querySelector('.description-wrapper')
let descInvitation = document.querySelector('.description__invitation')
let topPanel = document.querySelectorAll('.tp__el')

let topPanelArr = Array.from(topPanel)

function checkIndex() {
  if (typeOfBirdIndex === 4) {
    nextLvlBtn.textContent = 'Показать результаты'
  }
}

function nextLvl() {
  if (!nextLvlBtn.classList.contains('--disabled')) {
    let currIndex = topPanelArr.findIndex(item => item.classList.contains('tp--curr'))
    topPanelArr[currIndex].classList.remove('tp--curr')
    topPanelArr[currIndex + 1].classList.add('tp--curr')
    descWrapper.classList.add('visually-hidden')
    descInvitation.classList.remove('visually-hidden')
  }
  nextLvlBtn.classList.add('--disabled')
  nextLvlBtn.disabled = true
  checkIndex()
}

function newGameTopPanel() {
  topPanelArr.forEach(item => item.classList.remove('tp--curr'))
  topPanelArr[0].classList.add('tp--curr')
}

nextLvlBtn.addEventListener('click', nextLvl)
nextLvlBtn.addEventListener('click', showFinal)

export {nextLvlBtn, newGameTopPanel}