let acceptBtn = document.querySelector('.accept-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let welcome = document.querySelector('.welcome')

acceptBtn.addEventListener('click', () => {
  header.classList.remove('visually-hidden')
  footer.classList.remove('visually-hidden')
  welcome.classList.add('--hide')
  welcome.classList.remove('welcome')
})
cancelBtn.addEventListener('click', () => {
  close()
})