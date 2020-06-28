window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');
    var index = 0, length = target.length;
    for (index; index < length; index++) {
        (target[index].dataset.direction === 'vertical') ? 
            target[index].style.transform = 'translate3d(0px,'+window.pageYOffset * target[index].dataset.rate+'px, 0px)' :
            target[index].style.transform = 'translate3d('+window.pageYOffset * target[index].dataset.ratex+'px, '+window.pageYOffset * target[index].dataset.ratey+'px, 0px)';
    }
});