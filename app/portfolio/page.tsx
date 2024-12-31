import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image';
import styles from './page.module.css'

const page = () => {
    return (
        <div>
            <div className={styles.textContainer}>
                <p className={styles.worksText}>Works</p>
                <p className={styles.portfolioHeading}>Portfolio</p>
                <p className={styles.descriptionText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <section className={styles.cardGrid}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className={styles.cardContainer}>
                        <Image
                            className={styles.cardImage}
                            src={`/web${index + 1}${index + 1 === 8 ? '.jpg' : '.svg'}`}
                            alt={`web ${index + 1}`}
                            width={570}
                            height={334}
                            quality={100}
                        />
                    </div>
                ))}
            </section>

            <div className={styles.buttonContainer}>
                <button className={styles.learnMoreButton}>Learn More</button>
            </div>
        </div>
    );

}

export default page
export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Developed By: Subhan Sheikh",
};