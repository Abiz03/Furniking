
// =================================== banner currency ====================================
const currency = document.querySelector('.banner__content--links');
const currencyMenu = document.querySelector('.lang-menu');
const iconDown = document.querySelector('.icon-chevron-down::before');

currency.addEventListener('click', function(){
  if(currencyMenu.classList.contains('show')) {
    currencyMenu.classList.remove('show')
    iconDown.style = `transform: rotate(0deg)`
  } else {
    currencyMenu.classList.add('show')
    iconDown.style = `transform: rotate(180deg)`
  }
})
// =================================== form all categories ====================================
const categories = document.querySelector('.header__collections')
const categoriesList = document.querySelector('.collections__list')
categories.addEventListener('click', function(){
  if(categoriesList.classList.contains('active')){
    categoriesList.classList.remove('active')
  } else {
    categoriesList.classList.add('active')
    categoriesList.style.transition = "0.3s"
  }
})

// =================================== Customers Slider ====================================

const slider = document.querySelector('.cutsumers__slider--items')
const sliderItem = document.querySelectorAll('.customers--item')
const prevBtn = document.querySelector('.slider--prev')
const nextBtn = document.querySelector('.slider--next')
let moveSlide = 100
let timeMove = 1000
let activeSlide = 0

sliderItem.forEach(function(slide, key){
  if(key != activeSlide) {
    slide.style.transform = `translateX(${moveSlide}%)`
  }
  if(key == sliderItem.length - 1) {
    slide.style.transform = `translateX(${-moveSlide}%)`
  }
})
setInterval(function(){move(nextBtn)}, 5000)

prevBtn.addEventListener('click', function(){move(prevBtn)})
nextBtn.addEventListener('click', function(){move(nextBtn)})

function move(btn) {
  prevBtn.disabled = true
  nextBtn.disabled = true
  setTimeout(function(){
    prevBtn.disabled = false
    nextBtn.disabled = false
  }, timeMove + 200)
  let btnToggle = btn == nextBtn ? -moveSlide : moveSlide;
  sliderItem.forEach(function(slide, key){
    if(key != activeSlide){
      slide.style.transform = `translateX(${-btnToggle}%)`
      slide.style.transition = `0ms`
    }
  })
  sliderItem[activeSlide].style.transform = `translateX(${btnToggle}%)`
  sliderItem[activeSlide].style.transition = `${timeMove}ms`
  if(btn == nextBtn){
    activeSlide++
    if(activeSlide > sliderItem.length - 1) {
      activeSlide = 0
    }
  } else if(btn == prevBtn){
    activeSlide--
    if(activeSlide < 0) {
      activeSlide = sliderItem.length - 1
    }
  }
  sliderItem[activeSlide].style.transform = `translateX(0%)`
  sliderItem[activeSlide].style.transition = `${timeMove}ms`
}
// =================================== Customers Slider ====================================
const linkCart = document.querySelectorAll('.link--cart');
const linkReset = document.querySelectorAll('.link--reset')
const productsCart = document.querySelector('.navbar__icon--bag span');
let cartCounter = 0

if(cartCounter == 0) {
  productsCart.style.display = 'none'
}
linkCart.forEach(function(cart, key){
  cart.addEventListener('click', function(){
    productsCart.style.display = `flex`
    cartCounter += 1
    productsCart.innerHTML = `${cartCounter}`;
  })
})
linkReset.forEach(function(reset, key){
  reset.addEventListener('click', function(){
    if(cartCounter > 1) {
      cartCounter -= 1
      console.log(cartCounter);
      productsCart.innerHTML = `${cartCounter}`;
    } else {
      cartCounter = 0
      productsCart.innerHTML = `0`;
      productsCart.style.display = 'none';
    }
  })
})
// =================================== Start ====================================

class STAR {
  constructor(options) {
    this.parent = options.rating
    this.stars = this.parent.querySelectorAll('.icon-star')
    this.stars.forEach((star, key)=> {
      star.starValue = key + 1
      star.addEventListener('mouseover', ()=> {
        if(key < star.starValue) {
          star.classList.add('active')
        } else {
          star.classList.remove('active')
        }
      })
      star.addEventListener('mouseout', ()=> {
        if(key < star.starValue) {
          star.classList.add('active')
        } else {
          star.classList.remove('active')
        }
      })
      star.addEventListener('click', ()=> {
        if(key < star.starValue) {
          star.classList.add('active')
        } else {
          star.classList.remove('active')
        }
      })
    })
  }
}

const ratings = document.querySelectorAll('.ratings')

ratings.forEach(function(rating, key){
  new STAR ({
    rating: rating
  })
})