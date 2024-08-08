import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MainSection03 = () => {
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const workElementRef = useRef(null);

  

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      if (self.scroll().y > 1000) {
        gsap.to(".WORK", { opacity: 0, duration: 0.5 });
      } else {
        gsap.to(".WORK", { opacity: 1, duration: 0.5 });
      }
    }
  });

  useEffect(() => {
    const sections = [section4Ref, section5Ref, section6Ref, section7Ref];

    sections.forEach((sectionRef) => {
      const section = sectionRef.current;

      if (section) {
        gsap.set(section, {
          y: 100,
          scale: 1,
        });

        gsap.to(section, {
          y: 0,
          scale: 0.9,
          duration: 4,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: '+=500',
            scrub: 4,
          },
        });
      }
    });
  }, []);

  return (
    <section id="section3">
      <h1 className="WORK" ref={workElementRef}>WORK</h1>

      <div className="section4" ref={section4Ref}>
        <div className="img-title">
          <h2>WEBTOON-MOA</h2>
          <span>
            이 사이트는 웹툰 사이트의 정보들을 크롤링하여 뿌려준 사이트입니다.
            <br />
            USE SKILL : REACT SCSS
          </span>
        </div>
        <div className="section-img">
          <div className="overlay">
            <a href="https://webtoon-liard.vercel.app/" className="view">View</a>
            <a href="https://github.com/skadbstj12/webtoon" className="code">Code</a>
          </div>
        </div>
      </div>

      <div className="section5" ref={section5Ref}>
        <div className="img-title">
          <h2>MOVIE-REVIEW</h2>
          <span>
            Youtube API를 이용하여 유튜브에서 제공해주는 동영상들을 제공해주며 영화 리뷰를 모아볼 수 있는 사이트입니다.
            <br />
            USE SKILL : REACT SCSS
          </span>
        </div>
        <div className="section-img">
          <div className="overlay">
            <a href="https://youtubemovie.vercel.app/" className="view">View</a>
            <a href="https://github.com/skadbstj12/attraction" className="code">Code</a>
          </div>
        </div>
      </div>

      <div className="section6" ref={section6Ref}>
        <div className="img-title">
          <h2>MUSIC-CHART</h2>
          <span>
            이 사이트는 음악 스트리밍 플랫폼의 순위를 제목과 이미지를 크롤링 하여
            유튜브 API에 제목을 검색하게 한 뒤 제목에 맞는 영상을 볼 수 있게 해주었습니다.
            <br />
            USE SKILL : PYTHON, REACT SCSS
          </span>
        </div>
        <div className="section-img">
          <div className="overlay">
            <Link to="https://youtube-music2.vercel.app/" className="view">View</Link>
            <Link to="https://github.com/skadbstj12/youtube-music2" className="code">Code</Link>
          </div>
        </div>
      </div>

      <div className="section7" ref={section7Ref}>
        <div className="img-title">
          <h2>LINE ART ACADEMY</h2>
          <span>
            이 사이트는 REACT로 만들었습니다. <br />
            제가 다니던 학원의 웹페이지를 리뉴얼&기본툴을 제공하는 사이트를 만들었습니다.
          </span>
        </div>
        <div className="section-img">
          <div className="overlay">
            <Link to="#" className="view">View</Link>
            <Link to="#" className="code">Code</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection03;
