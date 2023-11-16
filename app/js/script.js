const burger = document.querySelector('.nav__hamburger'),
	overlay = document.querySelector('.overlay');
burger.addEventListener('click',()=>{
	burger.classList.toggle('isActive');
	overlay.classList.toggle('isActive');
});