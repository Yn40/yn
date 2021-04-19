import React, { useState } from 'react';
import Work from 'components/Work';
import list from 'data/portfolio.json';

const Portfolio = () => {
    return (
        <section className="port">
            <h1>MY PORTFOLIO</h1>
            <article className="list">
              <h2>Responsive</h2>
              {
                list.map(item =>(
                  item.type =="responsive" && <Work item={item} key={item.id}/>
                  // item.type === "responsive" ? "dddd": "bbb";
                ))
              }
            </article>
            {/* 
            <article class="list">
              <h2>Responsive</h2>
              <div class="unit"  v-for="item in list.responsive" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
                <PortItem :item="item"/>
              </div>
            </article>
            <article class="list">
              <h2>Mobile</h2>
              <div class="unit"  v-for="item in list.mobile" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
                <PortItem :item="item"/>
              </div>
            </article>
            <article class="list">
              <h2>PC</h2>
              <div class="unit"  v-for="item in list.pc" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
                <PortItem :item="item"/>
              </div>
            </article>
            <article class="list">
              <h2>ETC</h2>
              <div class="unit"  v-for="item in list.etc" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
                <PortItem :item="item"/>
              </div>*/}
        </section>
    );
};

export default Portfolio;