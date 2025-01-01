import React from 'react'
import Card from './Card'
import styles from './page.module.css'

const page = () => {
  return (
    <div>
      {/* Text */}
      <div className={styles.textContainer}>
        <p className={styles.text}>Plans</p>
        <p className={styles.text2}>Our Services</p>
        <p className={styles.text3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Cards */}
      <section className={styles.cardSection}>
        <div className={styles.cards}>
          <Card title="Basic" price="100" />
          <Card title="Plus" price="250" />
          <Card title="Pro" price="400" />
        </div>
      </section>
    </div>
  )
}

export default page