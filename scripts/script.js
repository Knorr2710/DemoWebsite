// JavaScript to toggle the navigation menu with animation
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const div = document.getElementById("clickWrapper");

div.addEventListener('click', () => {
  const childDiv = div.childNodes[0]; // The first child inside the wrapper
  
  if (childDiv.classList.contains("close")) {
    // Switch to hamburger menu
    childDiv.className = "menu animate";
  } else {
    // Switch to close icon
    childDiv.className = "close animate";
  }
});