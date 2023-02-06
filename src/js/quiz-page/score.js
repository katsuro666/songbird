let score = document.querySelector('.score')

// let points = 5
let result = 0

function countScore(points) {
  result += points
  score.textContent = result
}

export {countScore}