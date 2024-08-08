import React from 'react'
import profileImage from '../../assets/img/yoonseo3.jpg';
const MainSection02 = () => {
  return (
    <section id="section2">
    <div className="textLine">
      <div>SEOUL<span className="line l1">></span>BASE CODING</div>
      <div>DEVELOPER<span className="line l2">.</span>FRONTEND</div>
      <div>CREATIVE<span className="line l3">!</span>FULLSTACK</div>
      <p>
        문제를 해결하기 위해서라면 밤을 새우는 것도 마다하지 않는,<br />
        기술적 도전을 즐기며, 문제를 해결하는 과정에서 얻는 성취감을 사랑하는 개발자입니다.
      </p>
    </div>
    <div className="profile">
      <img src={profileImage} alt="포트폴리오 프로필 사진" className="profile-img" />
      <h2 className="profile-name">NAM YUNSEO</h2>
      <p className="profile-text">Developer</p>
      {/* <p className="profile-ex">어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다.</br>
          신입의 열정과 도전정신을 깊숙히 새기며배움에 있어 겸손함을 유지하고</br>
          세부적인 곳까지 파고드는 개발자가 되겠습니다.</p> */}
    </div>  
  </section>
  )
}

export default MainSection02
