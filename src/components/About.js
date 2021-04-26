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
					Front-End 개발자, Web Publisher 이유나입니다.<br/>
					첫 시작을 Java, php개발자로 시작해서, 웹퍼블리셔로 전향했기 때문에<br/>
					개발프로세스에 대한 이해도가 높다고 생각합니다.<br/>
					주로 하는 작업은 사내 서비스 신규 사이트 구축, 개편, 유지보수, 프로모션 작업 입니다.<br/>
					PC, 모바일, 반응형 웹 제작이 가능 합니다.<br/>
					SEO, 웹표준, 웹접근성 준수 합니다.<br/>
					React.js, Vue.js 등 최신 웹 트렌드에 관심을 갖고<br/>
					실무에 적용하고자 최선을 다하고 있습니다.
				</div>
				<a className="btn" href="https://www.notion.so/yn8206/2b31f8a06df64f66a980f717b312c27f" target="_blank"><span>이력서 보러가기 →</span></a>
				<a className="btn" href="https://github.com/Yn40?tab=repositories" target="_blank"><span>Github →</span></a>
			</article>
			<article className="skill">
				<h1 className="">Technical Stack</h1>
				<div>
					<img src={html} alt="Html5" className="img_skill" />
					<img src={css} alt="Css3 & Scss" className="img_skill"/>
					<img src={js} alt="JavaScript & JQuery" className="img_skill"/>
					<img src={git} alt="Git" className="img_skill"/>
					<img src={gulp} alt="Gulp" className="img_skill"/>
					<img src={react} alt="React" className="img_skill"/>
					<img src={vue} alt="Vue" className="img_skill"/>
				</div>
			</article>
		</section>
	);
};

export default About;