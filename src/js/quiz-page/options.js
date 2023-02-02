let options = document.querySelectorAll('.options__el')

options.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('--wrong')
  })
})