import React, { useState } from 'react';
import Item from 'components/portfolio/Item';
import list from 'data/portfolio.json';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h1>MY PORTFOLIO</h1>
            <article className="list">
              <h2>Responsive</h2>
              { 
                list.map(data =>(
                  data.type =="responsive" && <Item data={data} key={data.id}/>
                ))
              }
            </article>
            <article className="list">
              <h2>PC</h2>
              {
                list.map(data =>(
                  data.type =="pc" && <Item data={data} key={data.id}/>
                ))
              }
            </article>
            <article className="list">
              <h2>Mobile</h2>
              {
                list.map(data =>(
                  data.type =="mobile" && <Item data={data} key={data.id}/>
                ))
              }
            </article>
            
            <article className="list">
              <h2>ETC</h2>
              {
                list.map(data =>(
                  data.type =="etc" && <Item data={data} key={data.id}/>
                ))
              }
            </article>
        </section>
    );
};

export default Portfolio;