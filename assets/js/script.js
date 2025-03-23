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

document.addEventListener("DOMContentLoaded", () => {
    let dropdowns = document.querySelectorAll(".dropdown > a");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        if (window.innerWidth <= 770) {  // Only apply on small screens
          event.preventDefault(); // Prevent the default link action
  
          let submenu = dropdown.nextElementSibling;
          if (submenu.style.display === "block") {
            submenu.style.display = "none";
          } else {
            // Hide all other open dropdowns
            document.querySelectorAll(".dropdown ul").forEach((menu) => {
              menu.style.display = "none";
            });
            submenu.style.display = "block";
          }
        }
      });
    });
  });
  