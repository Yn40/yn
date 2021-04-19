import React from 'react';
// import * as  from 'react';

const Work = ({item}) => {
    return (
    <div className="unit">
        <img src={'img/web/'+ item.poster} alt={item.title} />
        <div className="corver" >
            <h3>{item.title}</h3>
            <p className="sub_tit">{item.sub_type}</p>
            <p className="info">{item.work.info}</p>
            {/* <p v-if="item.type !== 'pc' && item.type !== 'web'" v-html="item.sub_type" class="sub_tit">{{item.sub_type}}</p> */}
            {/* <p v-html="item.info" class="info">{{item.info}}</p> */}
            <span className="link">자세히 보기→</span>
        </div>
    </div>
    );
};

export default Work;