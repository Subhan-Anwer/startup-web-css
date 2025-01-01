import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, price }: { title: string, price: string }) => {
    return (
        // Card component
        <div className={styles.section}>
            {/* Text Container */}
            <div className={styles.textContainer}>
                {/* Title */}
                <p className={styles.title}>{title}</p>
                <div className={styles.monthlyPrice}>
                    {/* Price */}
                    <h1 className={styles.price}>${price}</h1>
                    {/* Per Month */}
                    <p className={styles.month}>/month</p>
                </div>
                {/* Description */}
                <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
            </div>

            {/* List */}
            <div className={styles.listContainer}>
                {Array(5).fill("Lorem ipsum dolor sit ")
                .map((text, index) =>  (
                    <div key={index} className={styles.li}>
                        <Image src='/check.png' alt='check' width={25} height={25} />
                        <p className={styles.liText}>{text}</p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Learn More</button>
            </div>
        </div>
    )
}

export default Card

// <div className="li">
{/* <Image src='/check.png' alt='check' width={25} height={25} />
<p className="liText">Lorem ipsum, dolor sit </p>
</div> */}