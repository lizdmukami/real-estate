$(document).ready(function(){

	"use strict";
	
    // CAROUSEL BANNER
    $(".carousel-sliders").owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'flipInX',
	    loop: true,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	// CAROUSEL TESTIMONIALS
	$(".carousel-testimonials").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1
	});
});
 
window.onscroll = function() {toggleMenu()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop + navbar.offsetHeight;

function toggleMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}
// CAROUSEL SLIDER

const myslide = document.querySelectorAll('.my-slide'),
dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
counter += 1;
slidefun(counter);
}
function plusSlides(n) {
counter += n;
slidefun(counter);
resetTimer();
}
function currentSlide(n) {
counter = n;
slidefun(counter);
resetTimer();
}
function resetTimer() {
clearInterval(timer);
timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

let i;
for(i = 0;i<myslide.length;i++){
myslide[i].style.display = "none";
}
for(i = 0;i<dot.length;i++) {
dot[i].className = dot[i].className.replace(' active', '');
}
if(n > myslide.length){
counter = 1;
}
if(n < 1){
counter = myslide.length;
}
myslide[counter - 1].style.display = "block";
dot[counter - 1].className += " active";
}
//end of projects section


