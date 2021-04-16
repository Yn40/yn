import React, { useState } from 'react';
import ico_mail from 'img/ico_mail.svg';
import loading from "img/loading.svg";
import emailjs from 'emailjs-com';

const initialIpts = {
	name : '',
	email : '',
	phone : '',
	title : '',
	message : '',
}

const Contact = () => {
	const [ipts, setIpts] =useState(initialIpts);
	const [mailState, setMailState] =useState({
		oepn : false,
		send : '',
		loading : false,
	});
	// const [open, setOpen] = useState(false);
	// const [sendState, setSendState] = useState(null);

	const sendEmail = e => {
		e.preventDefault();
		e.stopPropagation();
		console.log(e);
		
		setMailState({
			loading:true
		});
		emailjs.sendForm('yn8206', 'basic', e.target, 'user_bLEa1qqkN6v3iH5XoFW7F')
		.then((result) => {
			setMailState({
				open:true,
				send:"succes",
				loading:false
			});
			setIpts(initialIpts);
		}, (error) => {
			setMailState({
				open:true,
				send:"error",
				loading:false
			});
			throw Error (e);
		});
	}
	const onClose = () =>{
		setMailState({
			open:false,
		});
	}
	
  const onChange = e =>{
		console.log(e.target.name)
		console.log(e.target.value)
		setIpts({
			[e.target.name] : e.target.value
		})		
	;}

	return (
		<section className="contact">
			<h1>Contact To Me</h1>
			{
				mailState.loading ? <div className="loading"><img src={loading} alt="loading"/></div>:""
			}
			{
				mailState.open?
				<div className="alert">
					<div className="cont">
						{mailState.send !== "error" ? 
						<p>메일을 성공적으로 보냈습니다.<br/>확인 후 답변 드리겠습니다.</p> 
						: <p>메일을 보내기를 실패하였습니다<br/>다시 한번 시도해주세요.</p>}
						<button className="btn_close" type="button" onClick={onClose}>닫기</button>
					</div>
				</div>
				: ""
			}
			<form onSubmit={sendEmail}>
				<table className="tbl">
					<tbody>
						<tr>
							<td><label>Name</label><input type="text" name="name" placeholder="name" onChange={onChange} value={ipts.name} autoFocus /></td>	
							<td><label>E-Mail</label><input type="email" name="email" placeholder="E-Mail"  onChange={onChange} value={ipts.email}/></td>	
							<td><label>Phone</label><input type="phone" name="phone" placeholder="Phone Number"  onChange={onChange} value={ipts.phone}/></td>	
						</tr>
						<tr>
							<td colSpan="3"><input type="text" name="title"  placeholder="제목" onChange={onChange} value={ipts.title}/></td>
						</tr>
						<tr>
							<td colSpan="3"><textarea name="message" placeholder="내용을 입력해주세요."  onChange={onChange} value={ipts.message}/></td>
						</tr>
						<tr>
							<td colSpan="3"><button type="submit" className="btn"><img src={ico_mail} className="icon" alt="메일 아이콘"/> 메일 보내기</button></td>
						</tr>
						<tr>
							<td colSpan="3" className="noti">
								📢 용량이 큰 메일은 전송이 안됩니다. 아래 메일로 따로 보내주시길 바랍니다.<br/>
								<a href="mailto:lyn6264@naver.com"><b>lyn6264@naver.com</b></a>로 보내주세요. <br/>
							</td>
						</tr>
					</tbody>
				</table>	
			</form>
		</section>
	);
};

export default Contact;