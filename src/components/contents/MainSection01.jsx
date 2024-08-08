import React, { useEffect, useRef } from 'react'

const MainSection01 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const stars = canvasRef.current;
    const starsCtx = stars.getContext('2d');

    let screen,
        starsElements,
        starsParams = { speed: 1, number: 100, extinction: 4 };

    function Star() {
      this.x = Math.random() * stars.width;
      this.y = Math.random() * stars.height;
      this.z = Math.random() * stars.width;

      this.move = function () {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
          this.z = stars.width;
        }
      };

      this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity = rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
      };
    }

    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
      };
      window.cancelAnimationFrame(updateStars);
      stars.width = screen.w;
      stars.height = screen.h;
      starsElements = [];
      for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
      }
    }

    function updateStars() {
      starsCtx.fillStyle = "#1F2635";
      starsCtx.fillRect(0, 0, stars.width, stars.height);
      starsElements.forEach(function (s) {
        s.show();
        s.move();
      });
      window.requestAnimationFrame(updateStars);
    }

    setupStars();
    updateStars();

    window.onresize = function () {
      setupStars();
    };

    return () => {
      window.onresize = null; // Clean up the resize event listener
    };
  }, []);

  return (
    <section id="section1">
      <div className="text">
        <h1 className="split">PORTFOLIO</h1>
      </div>
      <canvas id="stars" ref={canvasRef}></canvas>
    </section>
  );
};

export default MainSection01
