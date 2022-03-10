document.body.onload = function(){
  setTimeout(function(){
    const preloader = document.querySelector('#preloader')
    if(!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
  }, 1000)
}

// const preloader = document.querySelector('#preloader')
// setTimeout(function(){
//   preloader.classList.add('done')
// }, 1500)