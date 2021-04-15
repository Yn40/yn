import React, { useState } from 'react';
import ico_mail from 'img/ico_mail.svg';
import emailjs from 'emailjs-com';
import Popup from './Popup';
const Contact = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [sendState, setSendState] = useState(null);

	const sendEmail = e => {
    	e.preventDefault();
		e.stopPropagation();
		console.log(e);
		setValue("");
		// emailjs.sendForm('yn8206', 'basic', e.target, 'user_bLEa1qqkN6v3iH5XoFW7F')
		// .then((result) => {
		// 	setOpen(true);
		// 	setSendState("succes");
		// 	console.log(result);
		// }, (error) => {
		// 	setSendState("error");
		// 	throw Error (e);
		// });
  	}
	const onClose = () =>{
		setOpen(false);
	}
	return (
		<section className="contact">
			<h1>Contact to Me</h1>
			{
				open?
				<div className="alert">
					<p>{sendState !== "error" ? "메일을 성공적으로 보냈습니다" : "메일을 보내기를 실패하였습니다"}</p>
					<button type="button" onClick={onClose}>닫기</button>
				</div>
				: ""
			}
			<form onSubmit={sendEmail}>
				<table className="tbl">
					<tbody>
						<tr>
							<td><label>Name</label><input type="text" name="name" value={value} /></td>	
							<td><label>E-Mail</label><input type="email" name="email" value={value} /></td>	
							<td><label>Phone</label><input type="phone" name="phone" value={value} /></td>	
						</tr>
						<tr>
							<td colSpan="3"><input type="text" name="title" value={value} /></td>
						</tr>
						<tr>
							<td colSpan="3"><textarea name="message" value={value} /></td>
						</tr>
					</tbody>
				</table>	
				<button type="submit" className="btn"><img src={ico_mail} className="icon" alt="메일 아이콘"/> 메일 보내기</button>
			</form>
			<a className="btn sm" href="mailto:lyn6264@naver.com">lyn6264@naver.com</a>
		</section>
	);
};

export default Contact;