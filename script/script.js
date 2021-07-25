// theme
const toggle = document.querySelector('input');
const html = document.querySelector('html');
// onclik
toggle.addEventListener('click', function () {
	if (html.dataset.theme === 'dark') {
		html.dataset.theme = 'light';
	} else {
		html.dataset.theme = 'dark';
	}
});

// navbar
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlink');
	const navLinks = document.querySelectorAll('.navlink li');

	burger.addEventListener('click', () => {
		// toggle nav
		nav.classList.toggle('nav-active');

		// animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		// burger animation
		burger.classList.toggle('toggle');
	});

}
navSlide();