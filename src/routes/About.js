import React from 'react';
import './About.css';

function About(props){//라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props
    console.log(props);
    return (
        <div className="about__container">
            <span>
                Developer : ChaelinYeo
                <br></br>
                email : gomgomtoto@gmail.com
                <br></br>
                blog : http://chaelinyeo.github.io/ 
                <br></br>
                github : http://chaelinyeo.github.io/
                "About this page: I built it because I love movies."
            </span>
        </div>
    );
}

export default About;