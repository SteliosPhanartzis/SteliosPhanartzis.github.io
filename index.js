const selector = document.querySelectorAll('.selector div');
function shiftSelector() {
	var project_index = 0;
	getComputedStyle(document.querySelector('.carousel')).getPropertyValue('transform');
	//Uses left offset dived by inner window width to get index
	let vw_ratio = (-1*parseInt(getComputedStyle(document.querySelector('.carousel-container')).getPropertyValue('width'))/parseInt(window.innerWidth));
	let carousel_offset = (parseInt(getComputedStyle(document.querySelector('.carousel')).getPropertyValue('left'))/parseInt(window.innerWidth) + 0.1);
	project_index = parseInt(carousel_offset/vw_ratio);
	//Remove highlight from previous selector
	if(project_index == selector.length)
		project_index = 0;
	selector[(project_index+selector.length-1)%selector.length].classList = "";
	//Add highlight to next selector
	selector[project_index].classList = "highlight";
	setTimeout("shiftSelector()",1000)
}
document.onload = shiftSelector();
