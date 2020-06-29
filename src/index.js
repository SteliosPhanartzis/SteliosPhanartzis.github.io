gsap.registerPlugin(ScrollTrigger);
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
        toggleActions: "restart restart restart reverse"
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
        toggleActions: "restart restart restart pause"
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
        toggleActions: "restart restart restart pause"
    },
    x: 100,
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
});