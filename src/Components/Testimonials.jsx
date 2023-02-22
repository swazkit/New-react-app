import React from 'react'
import { feedback } from '../constants'
import styles, {layout} from '../styles'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section className={` ${styles.flexCenter} flex-col relative`} id='clients'>
      <div className='absolute z-[0] w-[60%] h-[60%] blue__gradient -right-[50%] rounded-full' />

      <div className="w-full flex justify-between items-center md:flex-row flex-col mb-16 relative z-5">
        <h2 className={styles.heading2}>What people are <br className='hidden md:block' />
         saying about us</h2>

        <div>
            <p className={`${styles.paragraph} text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between sm:justify-start md:justify-center md:gap-4 w-full feedback-container relative z-1">
            {feedback.map((card) => (
                <FeedbackCard key={card.id } {...card} />
            ))}
      </div>
    </section>
)

export default Testimonials