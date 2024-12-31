import React from 'react'
import Image from 'next/image'
import styles from './ContentSection1.module.css'

const ContentSection1 = () => {
    return (
        <section className={styles.contentSection}>
            <div className={styles.contentImage}>
                <Image
                    src="/content1.svg"
                    alt="Content Section 1 Image"
                    width={600}
                    height={431}
                    className={styles.contentImage}
                />
            </div>
            <div className={styles.contentText}>
                <h2 className={styles.contentHeading}>
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className={styles.contentParagraph}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                <button className={styles.btn}>Learn more</button>
            </div>
        </section>

    )
}

export default ContentSection1