var tl= gsap.timeline();

tl.from("#nav h1, #nav h3, #nav h4",{
    y:-100,
    opacity:0,
    duration:0.5,
    delay:1,
    stagger:0.1
})

tl.from("#left h1",{
    x:-100,
    opacity:0,
    duration:0.5,
    stagger:0.4
})

tl.from("#right img",{
    scale:0,
    opacity:0,
    duration:0.5
})

// page2
gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    stagger:0.3,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body"
    }
})