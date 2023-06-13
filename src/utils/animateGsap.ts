import gsap from 'gsap'


export const singleDesktopAnimation = (
    target: string, 
    trigger: string, 
    start: string, 
    end: string, 
    markers: boolean,
    animation: {},
    duration: number = 1.1,
    delay: number = 0
) => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 100px)", () =>{
        gsap.to(target, {
            scrollTrigger: {
                trigger: trigger,
                start: start,
                end: end,
                scrub: false,
                markers: markers,
            },
            ...animation,
            duration,
            delay
        })
    })
}

