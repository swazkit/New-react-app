import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'


const CTA = () => {
  return (
    <section className={`${layout.section} ${styles.marginY} ${styles.padding} rounded-lg bg-black-gradient-2 flex flex-row sm:flex-col justify-between items-center`}>
      <div>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[445px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>

      </div>
      <Button className="mt-0" />
    </section>
  )
}

export default CTA