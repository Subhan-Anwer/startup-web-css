import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            {/* Text */}
            <div className={styles.textContainer}>
                <p className={styles.text}>Contact Us</p>
                <p className={styles.text2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Content */}
            <div className={styles.ContentSection}>
                <div className={styles.contentContainer}>
                    <div className={styles.inputDiv}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input id="name" type="text" className={styles.input} />
                    </div>

                    <div className={styles.inputDiv}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input id="name" type="text" className={styles.input} />
                    </div>

                    <div className={styles.inputDiv}>
                        <label htmlFor="msg" className={styles.label}>Message</label>
                        <textarea name="msg" id='msg' className={styles.textarea} ></textarea>
                    </div>

                    <button className={styles.btn}>Submit</button>
                </div>


                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/map.png' alt='Map Image' width={575} height={384} quality={100} />
                </div>
            </div>
        </div>
    )
}

export default page