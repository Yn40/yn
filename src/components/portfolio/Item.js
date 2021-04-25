import React, { useState } from 'react';
import Popup from 'components/portfolio/Popup';


const Item = ({data}) => {
    const [open, setOpen] = useState(false);
    const openPopup = () => {
        setOpen(true);
    };
    let info = (data.work.info).split('\n');
    return (
        <div className="unit" onClick={openPopup}>
            {open && <Popup data={data} setOpen={setOpen}/>}
            <img src={'img/web/'+ data.poster} alt={data.title} />
            <div className="corver" > 
                <h3>{data.title}</h3>
                <p className="sub_tit">{data.sub_type}</p>
                <p className="info">{info.map((line, index)=>{return (<span key={index}>{line}</span>)})}</p>
                <span className="link">자세히 보기→</span>
            </div>
        </div>
    );
};

export default Item;