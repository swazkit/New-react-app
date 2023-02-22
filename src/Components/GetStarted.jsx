import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] sm:visible invisible rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-base w-[100%] h-[100%] rounded-full`}>
      <span className="text-gradient flex gap-1">Get
      <img className='w-[23px] h-[23px] object-contain' src={ arrowUp } alt="arrowUp" /></span>
      <span className="text-gradient">Started</span>
    </div>
  </div>
)

export default GetStarted