let nextLvlBtn = document.querySelector('.next-lvl-btn')
let descWrapper = document.querySelector('.description-wrapper')
let descInvitation = document.querySelector('.description__invitation')
let topPanel = document.querySelectorAll('.tp__el')

let topPanelArr = Array.from(topPanel)

nextLvlBtn.addEventListener('click', () => {
  if (!nextLvlBtn.classList.contains('--disabled')) {
    let currIndex = topPanelArr.findIndex(item => item.classList.contains('tp--curr'))
    topPanelArr[currIndex].classList.remove('tp--curr')
    topPanelArr[currIndex + 1].classList.add('tp--curr')
    descWrapper.classList.add('visually-hidden')
    descInvitation.classList.remove('visually-hidden')
  }
  nextLvlBtn.classList.add('--disabled')
  nextLvlBtn.disabled = true
})

export {nextLvlBtn}