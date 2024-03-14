const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// const htm = document.querySelector('.html');
hamburger.addEventListener('click', mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // htm.classList.toggle("activehtm");
}
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click',closeMenu));
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // htm.classList.remove("active");
}
var video = document.querySelectorAll('.research');
video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
    if(play.paused){
        play.play();
    }else{
        play.pause();
    }
}));
const readMore = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readMore.addEventListener('click',showMore);
function showMore(){
    text.classList.toggle('show-more');
    if(readMore.textContent == 'read more'){
        readMore.textContent = 'read less ';
    }else{
        readMore.textContent = 'read more';
    }
}
function closePopup(){
    alert('hi');
}
function updateClock() {
    var now = new Date();
    var dateTime = now.toLocaleString(); // Get current date and time as a string
    document.getElementById('clock').innerHTML = dateTime;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  











