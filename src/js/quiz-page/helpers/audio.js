let correct = document.querySelector('.audio-correct')
let wrong = document.querySelector('.audio-wrong')

function correctAnswer(){
  // if (!this.classList.contain('--correct')) {
    new Audio(correct.src).play()
  // }
}
function wrongAnswer(){
  // if (!this.classList.contain('--wrong')) {
    new Audio(wrong.src).play()
    console.log(this)
  // }
}

export {correctAnswer, wrongAnswer}