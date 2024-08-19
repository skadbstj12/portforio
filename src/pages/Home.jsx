import React, { useLayoutEffect, useRef } from 'react';
import Main from '../components/contents/Main';
import MainSection01 from '../components/contents/MainSection01';
import MainSection02 from '../components/contents/MainSection02';
import MainSection03 from '../components/contents/MainSection03';
import MainSection04 from '../components/contents/MainSection04';
import MainSection05 from '../components/contents/MainSection05';
import MainSection06 from '../components/contents/MainSection06';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
import SplitType from 'split-type';
import Loading from '../components/contents/Loading';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const firstBoxRef = useRef(null);
  const secondBoxRef = useRef(null);
  const workElementRef = useRef(null);


  useLayoutEffect(() => {
    // Initial GSAP animations
    gsap.set(".text h1 .char", { opacity: 0, y: 100 });
    gsap.set("#header", { top: -100 });
    gsap.set("#footer", { bottom: -200 });
    gsap.set("#stars", { opacity: 0 });

    const tl = gsap.timeline();

    setTimeout(() => {
      tl.to(".text h1 .char", { y: 0, stagger: 0.04, opacity: 1, duration: 0.5, ease: "circ.out" });
      tl.to("#header", { top: 0, duration: 0.4, ease: "power4.out" });
      tl.to("#footer", { bottom: 0, duration: 0.4, ease: "power4.out" });
      tl.to("#stars", { opacity: 1, duration: 1 });
    }, 3000);

    const ani3 = gsap.timeline();

    ani3.to("#footer .left", { x: -400, duration: 0.4, ease: "power4.out" }, "a");
    ani3.to("#footer .right", { x: 400, duration: 0.4, ease: "power4.out" }, "a");
    ani3.to("#footer .center", { y: 200, duration: 0.4, ease: "power4.out" }, "a");

    ScrollTrigger.create({
      animation: ani3,
      trigger: "#section1",
      start: "top top",
      scrub: true,
    });

    const profileImg = gsap.timeline();

    profileImg.to(".profile", { opacity: 1, duration: 4 });

    ScrollTrigger.create({
      animation: profileImg,
      trigger: "#section2 .profile",
      start: "top top",
      scrub: false,
    });

    const firstBox = firstBoxRef.current;
    const secondBox = secondBoxRef.current;
    const workElement = workElementRef.current;

    if (firstBox && secondBox && workElement) {
      gsap.set(firstBox, {
        y: -workElement.offsetHeight / -2,
        zIndex: 100 
      });

      gsap.set(secondBox, {
        y: -workElement.offsetHeight / -4,
      });

      gsap.to(workElement, {
        scrollTrigger: {
          trigger: workElement,
          start: "center center",
          end: "+=5000",
          pin: true,
          pinSpacing: false,
        }
      });

      gsap.to(firstBox, {
        y: () => -workElement.offsetHeight,
        scrollTrigger: {
          trigger: workElement,
          start: "bottom bottom",
          end: "+=400",
          scrub: true,
          pin: false,
        }
      });
    }



    const rotateAnimation = (element, rotation) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top",
          end: "+=2500",
          scrub: true, 
        },
        rotation: rotation,
        ease: "none"
      });
    };

    rotateAnimation(".c1 img", 360);
    rotateAnimation(".c2 img", -360);
    rotateAnimation(".c3 img", 360);
    rotateAnimation(".c4 img", -360);
    rotateAnimation(".c5 img", 360);
    rotateAnimation(".c6 img", -360);



    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <Loading/> */}
    
<div id="wrap">
<Main />
      <MainSection01 />
      <MainSection02 />
      <MainSection03 />
      <MainSection04 />
      <MainSection05 />
      <MainSection06 />
</div>
    </>
  );
};

export default Home;
