import React from 'react'
import styles , { layout } from '../styles'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better deal in <br className='hidden sm:block'/>few easy steps</h2>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi repellendus eius incidunt eligendi et.</p>
        <Button />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card-img" />
      </div>
    </div>
)

export default CardDeal