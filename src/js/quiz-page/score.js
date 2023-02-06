let score = document.querySelector('.score')
let result = 0

function countScore(points) {
  result += points
  score.textContent = result
}
function showScore() {
  return result
}
function newScore() {
  result = 0
  score.textContent = 0
}

export {countScore, showScore, newScore}