gsap.registerPlugin(ScrollTrigger);
/* Snap to section */
let sections = gsap.utils.toArray("section");
var mobile = (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
if(!mobile){
    function goToSection(i, anim) {
      gsap.to(window, {
        scrollTo: {y: i*innerHeight, autoKill: false},
        duration: 1
      });
      if(anim)
        anim.restart();
    }
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        onEnter: () => goToSection(i)
      });
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      });
    });
}
/* Title screen */
gsap.from(".title-left", {
    scrollTrigger: {
        trigger: ".title-left",
        toggleActions: "restart reverse play pause"
    },
    x: 20,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: 'power1.inOut'
});
gsap.from(".title-right", {
    scrollTrigger: {
        trigger: ".title-right",
        toggleActions: "restart none restart pause"
    },
    x: -20,
    opacity: 0,
    duration: 2,
    ease: 'power1.inOut'
});
/* Left and Right aligns */
gsap.from(".left-align", {
    scrollTrigger: {
        trigger: ".left-align",
        toggleActions: "restart none restart reverse"
    },
    x: -80,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power2.out'
});
gsap.from(".right-align", {
    scrollTrigger: {
        trigger: ".right-align",
        toggleActions: "restart none restart pause"
    },
    x: 80,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power2.out'
});
/* Portfolio picture */
gsap.from(".full-pic", {
    scrollTrigger: {
        trigger: ".full-pic",
        toggleActions: "restart none restart pause"
    },
    x: 100,
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
});