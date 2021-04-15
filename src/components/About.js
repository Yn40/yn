import React from 'react';
import html from 'img/html.svg';
import css from 'img/css.svg';
import js from 'img/js.svg';
import git from 'img/git.svg';
import gulp from 'img/gulp.svg';
import react from 'img/react.svg';
import vue from 'img/vue.svg';

const About = () => {
	return (
		<section className="about">
			<h1 className="blind">자기소개</h1>
			<article className="intro">
				<h1>About Me</h1>
				<div className="txt">
					Web Publisher & Front-End 개발자 이유나입니다.<br/>
					첫 시작을 Java, php개발자로 시작해서, 웹퍼블리셔로 전향했기 때문에 개발프로세스에 대한 이해도가 높다고 생각합니다.<br/>
					다른 웹퍼블리셔들 보다 개발에 대한 이해도가 높다고 생각합니다.<br/>
					주로 하는 작업은 사내 서비스 신규 사이트 구축, 개편, 유지보수, 프로모션 작업 입니다.<br/>
					PC, 모바일, 반응형 웹 제작이 가능 합니다.<br/>
					SEO, 웹표준, 웹접근성 준수 합니다.<br/>
					웹 트렌드에 관심을 갖고 새로 나오는 기술을 스터디하고, <br/>
					습득한 기술을 실무에 적용하려 최선을 다하고 있습니다.
				</div>
				<a className="btn" href="#" target="_blank"><span>이력서 보러가기 →</span></a>
				<a className="btn" href="https://github.com/" target="_blank"><span>Github →</span></a>
			</article>
			<article className="skill">
				<h1 className="blind">MY SKILL</h1>
				<img src={html} alt="Html5" className="img_skill" />
				<img src={css} alt="Css3 & Scss" className="img_skill"/>
				<img src={js} alt="JavaScript & JQuery" className="img_skill"/>
				<img src={git} alt="Git" className="img_skill"/>
				<img src={gulp} alt="Gulp" className="img_skill"/>
				<img src={react} alt="React" className="img_skill"/>
				<img src={vue} alt="Vue" className="img_skill"/>
			</article>
		</section>
	);
};

export default About;