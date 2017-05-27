const navIcon = document.getElementById('nav-icon');
const navDrop = document.getElementById('nav-drop');
let gallOver = document.getElementsByClassName('overlay');
let gallOver2 = document.getElementsByClassName('overlay2');
let overClose = document.getElementsByClassName('overlay-close');
const email = document.getElementById('social-email');
const emailPopup = document.getElementById('email-form');
const formClose = document.getElementById('form-close');

// NAVIGATION
//Hide dropdown nav menu
navDrop.style.display ="none";

// Toggle dropdown nav menu when name lines are clicked
navIcon.addEventListener("click", ()=> {
	if( navDrop.style.display !== "block" ) {
		navDrop.style.display = "block";
	} else {
		navDrop.style.display = "none";
	}
});

// GALLERY
// Show overlay2 when "Learn More" is clicked
for( i=0; i < gallOver.length; i++ ) { 
	gallOver[i].addEventListener('click', (e)=>{
		let overlay = e.target;
		let overlay2 = overlay.parentElement.nextElementSibling;
		overlay2.style.transform = "translatey(0)";
		overlay2.style.opacity = "1";
	});
}

// Hide overlay2 when "X" is clicked
for( i=0; i < overClose.length; i++ ) {
	overClose[i].addEventListener("click", (e)=>{
		let x = e.target;
		let overlay = x.parentElement;
		overlay.style.transform = "translatey(-2000px)";
		overlay.style.opacity = "0";	
	});
}

// Show email form when "send me an email" is clicked
email.addEventListener("click", ()=>{
	emailPopup.style.display = "block";
});

// Hide email form when "X" is clicked 
formClose.addEventListener("click", ()=>{
	emailPopup.style.display = "none";
});
