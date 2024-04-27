document.addEventListener("DOMContentLoaded",function(){
    
    document.querySelector(".container").addEventListener("mouseenter", (dets) => {
        
        gsap.to(".shop-now",{
            opacity: 1,
            scale: 1,
            ease: Power3
        })
        document.addEventListener("mousemove", (dets) => {
            gsap.to(".shop-now",{
                x: `${dets.clientX-80}px`,
                y: `${dets.clientY-60}px`,
                ease: Power2
            })
        })
        document.querySelector(".container").addEventListener("mouseleave", (dets) => {
            gsap.to(".shop-now",{
                opacity: 0,
                scale: 0,
                ease: Power3
            })
        })
    })
    
    
   
})