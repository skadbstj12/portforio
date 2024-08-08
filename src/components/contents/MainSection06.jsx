import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/img/yoonseo3.jpg';

const Section7 = () => {
  return (
    <section id="section7">
      <div className="last-text">
        <h1>LET'S COLLABORATE</h1>
        <h4>AUTHENTIC TALES OF HUMAN SPIRIT</h4>
        <span>by yoonseo</span>
      </div>
      <div className="last-footer">
        <div className="last-left">
          <div className="infor_box">
            <div className="infor_title">
              <h5>INFORMATION ABOUT ME</h5>
              <div className="ko">
                FRONTEND DEVELOPER<br />
                WEB PUBLISHER
              </div>
            </div>
            <p className="my-link">
              NAME . 남윤서<br />
              EMAIL . <a href="mailto:skadbstj12@gmail.com">skadbstj12@gmail.com</a><br />
              GITHUB. <a href="https://github.com/skadbstj12">https://github.com/skadbstj12</a>
            </p>
            <div className="infor_btn">
              <p>I CAN'T WAIT TO HEAR FROM YOU</p>
              <a href="mailto:skadbstj12@gmail.com">Send email</a>
            </div>
          </div>
        </div>
        <div className="last-right">
          <img src={profileImage} alt="프로필 사진" />
        </div>
      </div>
    </section>
  );
};

export default Section7;
