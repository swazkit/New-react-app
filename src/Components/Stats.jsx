import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 justify-between px-6`}>
      {stats.map(stat => (
        <div key={stat.id} className={`${styles.flexCenter}`}>
          <h4 className='text-white font-poppins font-semibold xs:text-[40px] text-[30px]'> {stat.value} </h4>
          <p className='text-gradient pl-4 uppercase text-[15px] xs:text[20px] leading-[21px]'> {stat.title} </p>
        </div>
      ))}
    </div>
)

export default Stats