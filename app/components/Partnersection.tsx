import Image from "next/image";
import styles from "./partner.module.css";


const PartnersSection = () => {
  return (
    <div className={styles.partnersSection}>
      {/* Text Content */}
      <div className={styles.partnersContent}>
        <p className={styles.partnersHeading}>PARTNERS</p>
        <h2 className={styles.partnersTitle}>Lorem Ipsum Dolor</h2>
        <p className={styles.partnersDescription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Logos */}
      <div className={styles.partnersLogos}>
        <Image className={styles.logoImage} src="/google.png" alt="Google logo" width={152} height={50} />
        <Image className={styles.logoImage} src="/microsoft.png" alt="Microsoft logo" width={210} height={100} />
        <Image className={styles.logoImage} src="/airbnb.png" alt="Airbnb logo" width={160} height={50} />
        <Image className={styles.logoImage} src="/facebook.png" alt="Facebook logo" width={196} height={38} />
        <Image className={styles.logoImage} src="/spotify.png" alt="Spotify logo" width={166} height={50} />
      </div>

      {/* Button */}
      <button className={styles.btn}>Learn more</button>
    </div>
  );
};

export default PartnersSection;
