import React from 'react'
import {apple, bill, google} from '../assets'
import { layout } from '../styles'
import styles from '../styles'

const Billing = () => (
    <section id='product' className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>

      </div>

<div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>Easily control your <br className='sm:block' hidden />
        billing and invoice
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur,
        dipisicing elit. Officia ipsum magnam assumenda cc
        sunt ex sapiente natus cum! Dignissimos eaque recusandae officiis
        accusantium aut fugiat vel. Neque sequi ipsa optio doloremque!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-4">
        <img className='cursor-pointer object-contain mr-5' src={apple} alt="app-store-button" />
        <img className='cursor-pointer object-contain mr-5' src={google} alt="google-play" />
      </div>

</div>


    </section>
)

export default Billing