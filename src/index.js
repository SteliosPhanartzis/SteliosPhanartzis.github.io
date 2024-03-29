gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray("section");
var isScroll = true;
var mobile = (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i));
/* Snap to section */
/* Code is kinda buggy depending on viewport ratio, will be fixed in refactor */
// function goToSection(i, anim) {
//     if(isScroll){
//         gsap.to(window, {
//         scrollTo: {y: i*innerHeight, autoKill: false},
//         duration: 1
//         });
//         if(anim)
//             anim.restart();
//     }
// }
// if (!mobile){
//     sections.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         onEnter: () => goToSection(i)
//       });
//       ScrollTrigger.create({
//         trigger: section,
//         scrub: true,
//         start: "top top",
//         onEnterBack: () => goToSection(i),
//       });
//     });
// }
/* Title screen */
gsap.from(".title-left", {
    scrollTrigger: {
        trigger: ".title-left",
        toggleActions: "play none none none"
    },
    x: 20,
    autoAlpha: 0,
    duration: 2,
    ease: 'power1.inOut'
});
gsap.from(".title-right", {
    scrollTrigger: {
        trigger: ".title-right",
        toggleActions: "play none none none"
    },
    x: -20,
    autoAlpha: 0,
    duration: 2,
    delay: 1,
    ease: 'power1.inOut'
});
/* Bio in about me */
gsap.from(".bio", {
    scrollTrigger: {
        trigger: ".bio",
        toggleActions: "restart reset restart reset"
    },
    x: -80,
    autoAlpha: 0,
    duration: 1.5,
    delay: 2,
    stagger: 0.5,
    ease: 'power2.out'
});
/* Work pictures */
gsap.from(".work-items", {
    scrollTrigger: {
        trigger: ".work-items",
        toggleActions: "restart reset restart reset"
    },
    x: -80,
    autoAlpha: 0,
    duration: 1.5,
    delay: 2,
    ease: 'power2.out'
});
/* Right aligns */
gsap.from(".right-align", {
    scrollTrigger: {
        trigger: ".right-align",
        toggleActions: "restart reset restart reset"
    },
    x: 80,
    autoAlpha: 0,
    duration: 1.5,
    delay: 1,
    stagger: 0.5,
    ease: 'power2.out'
});
/* Portfolio picture */
gsap.from(".full-pic", {
    scrollTrigger: {
        trigger: ".full-pic",
        toggleActions: "restart reset restart reset"
    },
    x: 100,
    autoAlpha: 0,
    duration: 2,
    delay: 1,
    ease: 'power2.out'
});
// Determine whether section is scrolled to or jumped to
window.addEventListener('wheel', function(e) {
    isScroll = true;
});
document.onkeydown = (e) => {
    switch (event.keyCode) {
        case 33:
        case 34:
        case 37:
        case 38:
        case 39:
        case 40:
            isScroll = true;
            break
    }
}
var navItems = gsap.utils.toArray('.navItem');
navItems.forEach((item) => {
    addEventListener('click', function(e) {
        isScroll = false;
    });
});