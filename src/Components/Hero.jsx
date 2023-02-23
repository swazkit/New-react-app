import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
    <div id='home' className={`overflow-hidden flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className='h-8 w-8'/>
        <p className={`${styles.paragraph} ml-2`} ><span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account</p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className={`flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]`}>
          The Next <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation</span> <br />
        </h1>
        <div className="sm:flex md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>

      <p className={`${styles.paragraph} max-w-[29.375rem] py-6`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
      </p>
      </div>

      <div>
        <img src={ robot } alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "></div>
      </div>
    </div>
)

export default Hero