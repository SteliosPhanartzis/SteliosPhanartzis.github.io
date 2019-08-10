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
//	nav.style.paddingLeft = ((width)-$("#pageNav").width())/2 + "px";
}

jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};

function pageLoad(){
welcomeSplit();
elementOffset();
}

$(window).resize(function(){
	elementOffset();
});

$(window).scroll(function(){
console.log($(':offscreen'));
	
});