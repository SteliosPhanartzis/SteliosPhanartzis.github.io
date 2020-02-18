const selector = document.querySelectorAll('.selector div');
const carousel = document.querySelector('.carousel');
const changeProject = document.querySelector('.change-project');
const prev = document.querySelector('#left');
const next = document.querySelector('#right');
let frame = 0, holdframe = false;

//Listener to reset position
carousel.addEventListener("transitionend", () => {
	if(frame < 1){
		frame = 4;
		carousel.classList.add("reset-transition");
		carousel.setAttribute("style", `left: ${-400}%`);
	}
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
changeProject.addEventListener("mouseover", () => {
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
changeProject.addEventListener("mouseleave", () => {
	console.log("Continue carousel");
	//Set holdframe flag to false
	holdframe = false;
});

//Normal carousel functionality
function slideLeft() {
	if (carousel.classList.length > 1)
		carousel.classList = "carousel";
	if(holdframe)
		setTimeout("slideLeft()",1000)
	else {
		// carousel.classList = "carousel";
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
