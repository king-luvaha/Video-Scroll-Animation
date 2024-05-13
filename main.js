// Initialize Lenis Smooth Scroll

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP
// Create animation timeline
const tl = gsap.timeline();

// Select all title text rows
const titles = gsap.utils.toArray(".title h1");
titles.forEach(title => {
    tl.to(title, {
        opacity: 0, // Fade out each row
        y: "-100vh", // Move up each row
        scrollTrigger: {
            trigger: ".hero", //Trigger element
            start: "top top", //Trigger position
            scrub: true, //Animation follows scroll position
        }
    });
});
// Video Scroll Animation
tl.to(".pin-video", {
    left: "0%",
    width: "100%",
    top: "0%",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true,
        pin: ".hero" //Fix position
    }
});

// Select all text rows
const text = gsap.utils.toArray(".cta h1");
text.forEach(row => {
    gsap.from(row, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: row,
            start: "center 180%",
            scrub: true,
        }
    });
});