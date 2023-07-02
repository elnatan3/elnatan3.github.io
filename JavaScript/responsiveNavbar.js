const mainNav = document.querySelector('.navbar-content ul');
const navBarToggle = document.getElementById('js-navbar-toggle');
const burger = document.querySelector(".burger");

navBarToggle.addEventListener('click', function () {
    burger.classList.toggle('toggle');
    mainNav.classList.toggle('active');
});