import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Popup = ({data, setOpen}) => {
    const closePopup = (e) =>{
        e.stopPropagation();
        setOpen(false);
    }
    const settings = {
      dots: true,
      infinite: true,
      arrows:false,
      speed: 400,
      autoplaySpeed:2000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <section className="popup">
            <div className="wrap">
                <h2>{data.title}</h2>
                <button onClick={closePopup} className="btn_close">닫기</button>
                <p className="sub_tit">{data.work.info}</p>
                <Slider  {...settings}>
                {
                    data.img.map((imgUrl, index) => (
                        <img key={index} src={"../img/web/" + imgUrl} alt={data.title+" 이미지"}/>
                    ))
                }
                </Slider>
                <div className="cont">
                    {
                        data.work.new && <p><b>개편 기여도 </b>: {data.work.new}</p>
                    }
                    <p><b>기술 </b>: {data.skill}</p>
                    {
                        data.work.desc && <p className="desc"><b>개편 </b>: <span>{data.work.desc}</span></p>
                    }
                    <p><b>지원 브라우저 </b>: {data.browser}</p>
                    {
                        data.url1 ? <p><b>URL </b>: <a href={data.url1} target="_blank">{data.url1}</a></p> : <p><b>서비스가 중지되었습니다.</b></p>
                    }
                    {
                        data.url2 && <p><b>마크업 URL </b>: <a href={data.url2} target="_blank">{data.url2}</a></p>
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Popup;