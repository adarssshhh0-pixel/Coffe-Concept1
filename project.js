var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(2)"
    })
})

var tll = gsap.timeline()

tll.from("#flow .a",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,
})
tll.from("#drop",{
    opacity:0,
    y:-20,
    duration:1.5,
})