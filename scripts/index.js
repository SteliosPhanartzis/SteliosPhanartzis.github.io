var leftH1 = document.getElementById('lefth1');
var rightH1 = document.getElementById('righth1');

function welcomeSplit() {
	    leftH1.style.marginTop = "-100px";
	    rightH1.style.marginTop = "+100px";
	    leftH1.style.opacity = 0;
	    rightH1.style.opacity = 0;
}

function elementOffset(){
	var width = window.innerWidth;
	var nav = document.getElementById('pageNav');
	console.log(width + " " + $("#pageNav").width() + " " + $("#projects").width());
	nav.style.paddingLeft = (width*.99-$("#pageNav").width())/2 + "px";
}

function pageLoad(){
welcomeSplit();
elementOffset();
}

$(window).resize(function(){
	elementOffset();
});