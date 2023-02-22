import React from 'react'
import { features } from '../constants'
import styles from '../styles'
import layout from '../styles'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className='grid grid-flow-row sm:grid-flow-col gap-5 rounded-xl p-4 bg-dimBlue'>
      <div className='p-5'>
        <img className='bg-teal-800 p-3 rounded-full w-[50px] h-[50px]' src={icon} alt="icon" />
      </div>
      <div className='flex flex-col'>
        <h5 className='font-poppins font-semibold text-[18px] text-white'>{title}</h5>
        <p className={`${styles.paragraph} text-[16px]`}> {content} </p>
      </div>
  </div>
)

const Business = () => (
    <section id='features' className={`${layout.section} flex flex-col sm:flex-row`} >
      <div className= {layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>You do the business, <br className="max-sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button/>
      </div>

      <div className={`${layout.sectionImg} flex flex-col gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {... feature} />
        ))}
      </div>
    </section>
)

export default Business