var leftH1 = document.getElementById('lefth1');
var rightH1 = document.getElementById('righth1');

function resolveAfter2Seconds() {
    setTimeout(() => {
	    leftH1.style.marginTop = "-100px";
	    rightH1.style.marginTop = "+100px";
	    leftH1.style.opacity = 0;
	    rightH1.style.opacity = 0;
	    setTimeout1(() => {
		    rightH1.style.display = 'none';
		    leftH1.style.display = 'none';
	    }, 1000);
    }, 1000);
}
resolveAfter2Seconds();