import React from 'react';
import ico_mail from 'img/ico_mail.svg';
import emailjs from 'emailjs-com';
const Contact = () => {
	function sendEmail(e) {
    e.preventDefault();
		console.log(e.target);
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs.sendForm('yn8206', 'basic', e.target, 'user_bLEa1qqkN6v3iH5XoFW7F')
      .then((result) => {
				console.log(result);
      }, (error) => {
				console.log(error.text);
      });
  }
	return (
		<section className="contact">
			<h1>Contact to Me</h1>
			<a className="btn" href="mailto:lyn6264@naver.com"><img src={ico_mail} className="img" alt="메일 아이콘"/> lyn6264@naver.com</a>
			
			<form className="contact-form" onSubmit={sendEmail}>
				<input type="hidden" name="contact_number" />
				<label>Name</label>
				<input type="text" name="name" />
				<label>title</label>
				<input type="text" name="title" />
				<label>Email</label>
				<input type="email" name="email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</section>
	);
};

export default Contact;