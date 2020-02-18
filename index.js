const selector = document.querySelectorAll('.selector div');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('#left');
const next = document.querySelector('#right');
let frame = 0, holdframe = false;

//Listener to reset position
carousel.addEventListener("transitionend", () => {
	if(frame > 4){
		frame = 1;
		carousel.classList.add("reset-transition");
		carousel.setAttribute("style", `left: ${-100}%`);
	}
});

//Pause carousel on hover
carousel.addEventListener("mouseover", () => {
	console.log("Pause carousel");
	//Set holdframe flag to true
	holdframe = true;
});
prev.addEventListener("mouseover", () => {
	console.log("Pause carousel");
	//Set holdframe flag to true
	holdframe = true;
});
next.addEventListener("mouseover", () => {
	console.log("Pause carousel");
	//Set holdframe flag to true
	holdframe = true;
});

//Continue carousel
carousel.addEventListener("mouseleave", () => {
	console.log("Continue carousel");
	//Set holdframe flag to false
	holdframe = false;
});
prev.addEventListener("mouseleave", () => {
	console.log("Continue carousel");
	//Set holdframe flag to false
	holdframe = false;
});
next.addEventListener("mouseleave", () => {
	console.log("Continue carousel");
	//Set holdframe flag to false
	holdframe = false;
});

//Normal carousel functionality
function slideLeft() {
	if(holdframe)
		setTimeout("slideLeft()",1000)
	else {
		carousel.classList = "carousel";
		carousel.style.transitionDuration = "0.75s";
		selector[(frame+selector.length-1)%selector.length].classList = "";
		//Add highlight to next selector
		frame++;
		selector[(frame+selector.length-1)%selector.length].classList = "highlight";
		carousel.setAttribute("style", `left: ${-100 * frame}%`);
		setTimeout("slideLeft()",5000)
	}
}

function shift_slide(num) {
	selector[(frame+selector.length-1)%selector.length].classList = "";
	frame = (frame+selector.length+num)%selector.length;
	selector[(frame+selector.length-1)%selector.length].classList = "highlight";
	carousel.setAttribute("style", `left: ${-100*frame}%;`);
}
document.onload = slideLeft();
