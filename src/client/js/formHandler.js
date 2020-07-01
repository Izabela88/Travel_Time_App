// Responsive Navigation Bar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });

}
navSlide();

// Dropdown About Menu
const dropMenu = () => {
  const content = document.querySelector('.dropdown-content');
  const drop = document.querySelector('#dropdown');
  drop.addEventListener('click', () => {
    content.classList.toggle('show');
  })
}

dropMenu();

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}


export {
  navSlide,
  dropMenu
}