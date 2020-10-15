const burger = document.querySelector('.bars');
const bars = document.querySelectorAll('.bars > *');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    bars.forEach(bar => {
        bar.classList.toggle('active');
        // navLinks.classList.toggle('active');
    });

    navLinks.classList.toggle('active')
});