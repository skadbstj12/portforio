import React from 'react'
import { Link } from 'react-router-dom'
import circleImg1 from '../../assets/img/g1.png';
import circleImg2 from '../../assets/img/g2.png';
import circleImg3 from '../../assets/img/g3.png';
import circleImg4 from '../../assets/img/g4.png';
import circleImg5 from '../../assets/img/g5.png';
import circleImg6 from '../../assets/img/g6.png';
const MainSection05 = () => {
  return (
<section id="section5" class="cont_container mainSection_03">
            <h2>
                A FRONTEND DEVELOPER EL-<br/>
EVATING USER EXPERIENCES<br/>
THROUGH TECH AND DESIGN
            </h2>
            <span> 저는 풀스택 개발자가 되고 싶습니다.<br/>
                프론트엔드와 백엔드 모두 다룰 수 있는 능력을 갖추고자 합니다.<br/>
                노력 없이는 성공할 수 없다는 것을 잘 알고 있습니다. 그래서 저는 계속해서 배우고 성장할 것입니다.</span>
            <div class="record">
                <div class="circle_wrap">
                    <div class="circle_cont">
                        <div class="circle">
                            <div class="parallax__item__img c1">
                                <img src={circleImg1} alt="" />
                            </div>
                            <div class="parallax__item__img c2">
                                <img src={circleImg2} alt="" />
                            </div>
                            <div class="parallax__item__img c3">
                                <img src={circleImg3} alt="" />
                            </div>
                            <div class="parallax__item__img c4">
                                <img src={circleImg4} alt="" />
                            </div>
                            <div class="parallax__item__img c5">
                                <img src={circleImg5} alt="" />
                            </div>
                            <div class="parallax__item__img c6">
                                <img src={circleImg6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="work2">
                    <div class="work_title">
                        <h5>work script - parallax</h5>
                        <p>
                            자바스크립트로 parallax를 이용해보았습니다
                        </p>
                        <Link to="https://skadbstj12.github.io/class2024/effect/index.html" target="_blank">
                            <div class="work-box"></div>
                        </Link>
                        <h5>Technology stack</h5>
                        <ul>
                            <li>HTML CSS JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div class="work_title">
                        <h5>work script - quiz</h5>
                        <p>
                            자바스크립트를 이용하여 정보처리기능사 퀴즈게임을 만들어보았습니다.
                        </p>
                        <Link to="https://skadbstj12.github.io/class2024/quiz/index.html" target="_blank">
                            <div class="work-box2"></div>
                        </Link>
                        <h5>Technology stack</h5>
                        <ul>
                            <li>HTML CSS JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div class="work_title">
                        <h5>work script - BLOG</h5>
                        <p>
                            PHP를 이용하여 블로그 사이트를 만들어보았습니다.
                        </p>
                        <Link to="http://skadbstj12.dothome.co.kr/blog/blogRead.php?category=%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4" target="_blank">
                            <div class="work-box3"></div>
                        </Link>
                        <h5>Technology stack</h5>
                        <ul>
                            <li>HTML CSS JAVASCRIPT PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MainSection05
