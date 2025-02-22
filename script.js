document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});


// JavaScript for toggling the mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the active class when the hamburger icon is clicked
  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});
