import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={`${styles.heroSection}`}>
      <div className={`${styles.heroContainer}`}>
        <div className={`${styles.heroContent}`}>
          <div className={`${styles.textContent}`}>
            <h5 className={`${styles.welcomeText}`}>WELCOME</h5>
            <h2 className={`${styles.heroTitle}`}>
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className={`${styles.heroDescription}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
          </div>
          <button className={styles.btn}>Explore</button>
        </div>
        <div className={styles.heroImageContainer}>
        <Image className={styles.heroImage} src={'/heroImg.png'} alt='Hero image' width={600} height={600} />
        </div>
      </div>
    </div>

  )
}

export default Hero