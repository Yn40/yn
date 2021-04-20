import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Detail from 'components/portfolio/Detail';

const Item = ({data}) => {
    const [open, setOpen] = useState(false);
    const openPopup = () => {
        console.log("==-=");

    };
    let info = (data.work.info).split('\n');
    return (
        <div className="unit" onClick={openPopup}>
            <img src={'img/web/'+ data.poster} alt={data.title} />
            <div className="corver" >
                <h3>{data.title}</h3>
                <p className="sub_tit">{data.sub_type}</p>
                <p className="info">{info.map(line=>{return (<span>{line}</span>)})}</p>
                <span className="link">자세히 보기→</span>
            </div>
            <Detail data={data}/>
        </div>
    );
};

export default Item;