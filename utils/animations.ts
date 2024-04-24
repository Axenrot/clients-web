// animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function chainReveal() {
  gsap.fromTo(
    ".reveal-item",
    {
      opacity: 0,
      translateY: 50,
    },
    {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
      translateY: 0,
      stagger: 0.1,
      // delay: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".reveal-item",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}

export function titleReveal() {
  gsap.fromTo(
    ".title-reveal",
    {
      opacity: 0,
      letterSpacing: "0.25em",
      lineHeight: "0%",
      // translateY: -50,
    },
    {
      opacity: 1,
      lineHeight: "100%",
      letterSpacing: "0.1em",
      duration: 2,
      delay: 0.2,
      translateY: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".title-reveal",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}

export function logoReveal() {
  gsap.fromTo(
    ".logo-reveal",
    {
      opacity: 0,
      translateY: -50,
    },
    {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
      translateY: 0,
      stagger: 0.1,
      // delay: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".logo",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}
