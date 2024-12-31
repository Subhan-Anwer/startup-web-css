import React from 'react'
import Image from 'next/image'
import styles from './teamCard.module.css'

const TeamCard = ({ imageSrc, name, position }: { imageSrc: string, name: string, position: string }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={125}
                        height={196}
                        className={styles.image}
                    />
                </div>
                <div className={styles.cardText}>
                    <h6 className={styles.cardName}>
                        {name}
                    </h6>
                    <p className={styles.cardPosition}>
                        {position}
                    </p>
                </div>
            </div>
        </div>



    )
}

export default TeamCard