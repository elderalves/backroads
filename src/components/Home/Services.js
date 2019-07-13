import React from 'react';

import styles from '../../css/services.module.css';

import Title from '../Title';
import services from '../../constants/services';


const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Our" subtitle="services"></Title>
      <div className={styles.center}>
        {
          services.map((item, idx) => {
            return (
              <article key={idx} className={styles.service}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services;

