import React from 'react'
import styles from './btn.module.css'

const Btn = ({ text, bgColor, textColor }: { text: string, bgColor: string, textColor: string }) => {
  return (
    <button
      className={`${styles.button} ${bgColor} text-${textColor}`}
    >
      {text}
    </button>

  )
}

export default Btn