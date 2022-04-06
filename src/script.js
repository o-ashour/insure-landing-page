// Elements
const navIcon = document.querySelector('.nav-menu-icon');
const navMenu = document.querySelector('nav');

// Event listeners
navIcon.addEventListener('click', toggleNav);

// open and close nav menu and switch icons
function toggleNav(){
  navMenu.classList.toggle('nav-open');
  if(navMenu.classList.contains('nav-open')){
    navIcon.setAttribute('src', '/icon-close.1add023a.svg');
    navIcon.setAttribute('alt', 'Close menu icon');
  }
  else {
    navIcon.setAttribute('src', '/icon-hamburger.cb455b0f.svg');
    navIcon.setAttribute('alt', 'Hamburger menu icon');
  }
}