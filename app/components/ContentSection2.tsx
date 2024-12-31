import React from 'react'
import Image from 'next/image'
import styles from './ContentSection2.module.css'

const ContentSection2 = () => {
    return (
        <section className={styles.contentSection2}>
            <div className={styles.textContainer}>
                <h2 className={styles.heading}>
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className={styles.contentParagraph}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                
                <button className={styles.btn}>Learn more</button>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={"/content2.svg"}
                    alt="contentSection2img"
                    width={600}
                    height={586}
                    className={styles.image}
                />
            </div>
        </section>

    )
}

export default ContentSection2