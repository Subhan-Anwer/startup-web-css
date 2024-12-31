import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <Image src="/facebook-icon.png" width={18} height={18} alt="Facebook" />
          <Image src="/instagram.png" width={18} height={18} alt="Instagram" />
          <Image src="/twitter.png" width={21} height={18} alt="Twitter" />
          <Image src="/pinterest.png" width={18} height={18} alt="Pinterest" />
          <Image src="/tiktok.png" width={18} height={18} alt="TikTok" />
          <Image src="/whatsapp.png" width={18} height={18} alt="WhatsApp" />
          <Image src="/youtube.png" width={23} height={18} alt="YouTube" />
        </div>

        {/* Copyright */}
        <h6 className={styles.copyright}>
          © Start, 2022. All rights reserved.
        </h6>
      </div>
    </footer>
  )
}

export default Footer