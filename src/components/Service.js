import React from 'react';
import Title from './Title';
import { serviceElements } from '../data';

const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subtitle='services' />

      <div className="section-center services-center">
        {serviceElements.map(({id, icon, title, paragraph}) => {
          return (
            <article className="service" key={id}>
              <span className="service-icon"><i className={icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {paragraph}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Service;
