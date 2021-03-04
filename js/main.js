// "const" is constructor it creates the link to the content
const clickButton = document.querySelector('.toggle-btn');

//  ">=" is a short-hand for making a .....

clickButton.addEventListener('click', () => {
		document.querySelector('nav').classList.toggle('show-nav')
});