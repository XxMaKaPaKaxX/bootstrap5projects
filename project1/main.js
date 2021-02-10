const collapsButton = document.querySelector('.navbar-toggler');
const collapsedNav = document.querySelector('.navbar-collapse');
const navLinks = [...document.querySelectorAll('.navbar-nav a.nav-link')];
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        collapsButton.classList.toggle('collapsed');
        collapsedNav.classList.toggle('show')
    })
})