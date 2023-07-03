import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id='portifolio'>
        <h2 className="section__title">Portfólio</h2>
        <span className="section__subtitle">Certificações/Especializações</span>
        <Works />
    </section>
  )
}

export default Work
