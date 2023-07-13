document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-links');
    });
});


function transition(event) {
    event.preventDefault(); 
    const transitionElement = document.getElementById('page-transition');
    transitionElement.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = event.target.href;
    }, 500);
}
