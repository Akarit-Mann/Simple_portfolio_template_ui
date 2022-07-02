

let navControlOpen = document.querySelector('#nav-control-open')

let navControlClose = document.querySelector('#nav-control-close')

let navWorkPlace = document.querySelector('#nav-control-bar')

navControlOpen.addEventListener('click',()=>{
    console.log("it work")
    navWorkPlace.classList.add("nav-work-place")

})
navControlClose.addEventListener('click',()=>{

    navWorkPlace.classList.remove("nav-work-place")

})

