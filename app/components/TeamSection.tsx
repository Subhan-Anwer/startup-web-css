import React from 'react'
import styles from './TeamSection.module.css'
import TeamCard from './TeamCard'

const TeamSection = () => {
    return (
        <section className={styles.teamSection}>
            {/* Title */}
            <div className={styles.titleContainer}>
                <p className={styles.subHeading}>team</p>
                <h2 className={styles.mainHeading}>Our Talents</h2>
                <p className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
                </p>
            </div>

            {/* Cards */}
            <div className={styles.cardsContainer}>
                <TeamCard
                    imageSrc="/team1.svg"
                    name="Peg Legge"
                    position="CEO"
                />
                <TeamCard
                    imageSrc="/team2.svg"
                    name="Richard Guerra"
                    position="CTO"
                />
                <TeamCard
                    imageSrc="/team3.svg"
                    name="Alexandra Stolz"
                    position="DESIGNER"
                />
                <TeamCard
                    imageSrc="/team4.svg"
                    name="Janet Bray"
                    position="DEVELOPER"
                />
            </div>

            {/* Button */}
            <button className={styles.btn}>View Team</button>
        </section>

    )
}

export default TeamSection