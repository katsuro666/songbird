import {setNewGame, typeOfBirdIndex} from '../quiz-page/question'
import {showScore, newScore} from '../quiz-page/score'
import {setNewGameOptions} from '../quiz-page/options'
import {newGameTopPanel} from '../quiz-page/next-lvl-btn'

let quizPage = document.querySelector('.quiz')
let result = document.querySelector('.result')
let resultScore = document.querySelector('.result-score')
let resultWin = document.querySelector('.result--win')
let resultLose = document.querySelector('.result--lose')
let btnContainer = document.querySelector('.result-btn-container')
let resultBtn = document.querySelector('.result__button')


function showFinal() {
  if (typeOfBirdIndex === 5) {
    result.classList.remove('result--hide')
    result.classList.add('result--show')
    quizPage.classList.add('visually-hidden')
    resultScore.textContent = showScore()

    if (showScore() === 30) {
      resultWin.classList.remove('visually-hidden')
    } else {
      resultLose.classList.remove('visually-hidden')
      btnContainer.classList.remove('visually-hidden')
      if (showScore() >= 20) {
        resultLose.textContent = 'Хороший результат! Попробуешь улучшить его?'
      } else if (showScore() >= 10) {
        resultLose.textContent = 'Неплохо, но можно лучше! Может, попробуем ещё раз?'
      } else {
        resultLose.textContent = 'Давай честно, ты просто рандомно тыкал в ответы? :)'
      }
    }
  }
}

function startNewGame() {
  resultLose.classList.add('visually-hidden')
  btnContainer.classList.add('visually-hidden')
  result.classList.add('result--hide')
  result.classList.remove('result--show')
  quizPage.classList.remove('visually-hidden')

  newScore()
  setNewGame()
  newGameTopPanel()
  setNewGameOptions()
}


resultBtn.addEventListener('click', startNewGame)

export {showFinal}