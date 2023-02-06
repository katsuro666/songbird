let correct = document.querySelector('.audio-correct')
let wrong = document.querySelector('.audio-wrong')

function correctAnswer(){
  new Audio(correct.src).play()
}
function wrongAnswer(){
  new Audio(wrong.src).play()
}

export {correctAnswer, wrongAnswer}