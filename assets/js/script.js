// Search Button Functionality Start
let searchBtn=document.querySelector('.searchBtn')
let closeBtn=document.querySelector('.closeBtn')
let searchBox=document.querySelector('.searchBox')

searchBtn.onclick=function(){
    searchBox.classList.add('active')
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
    menuToggle.classList.add('hide')
    nav.classList.remove('open')
}
closeBtn.onclick=function(){
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    menuToggle.classList.remove('hide')
}

// Search Button Functionality End

let nav=document.querySelector('nav')
let navigation=document.querySelector('.navigation')
let menuToggle=document.querySelector('.menuToggle')



menuToggle.onclick=function(){
    nav.classList.toggle('open')
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
}


// Carousel Start

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
let autoSlideInterval;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove('active'));
    thumbnails.forEach((thumb) => thumb.classList.remove('active'));

    // Show the current slide and thumbnail
    slides[index].classList.add('active');
    thumbnails[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Start automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Stop automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        stopAutoSlide(); // Stop auto-slide when user manually selects a slide
        startAutoSlide(); // Restart auto-slide after a delay
    });
});

// Initialize the carousel
showSlide(currentIndex);
startAutoSlide();

