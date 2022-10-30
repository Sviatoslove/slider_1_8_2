const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
const counter = document.querySelector('.counter')

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0
counter.innerHTML = activeSlideIndex + 1


upBtn.addEventListener('click', () => {
 changeSlide('up')
})

downBtn.addEventListener('click', () => {
 changeSlide('down')
})

function changeSlide(direction) {
 if(direction === 'up') {
  activeSlideIndex ++
  if(activeSlideIndex === slidesCount) {
   activeSlideIndex = 0
  }
 }else if(direction === 'down'){
  activeSlideIndex --
  if(activeSlideIndex < 0) {
   activeSlideIndex = slidesCount - 1
  }
 }
 counter.innerHTML = activeSlideIndex + 1
 console.log(counter)
 const height = container.clientHeight
 mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
 sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}