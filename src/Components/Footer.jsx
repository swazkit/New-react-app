import React from 'react'
import { logo } from '../assets'
import styles, { layout } from '../styles'
import { footerLinks } from '../constants'
import { instagram, facebook, twitter, linkedin } from '../assets'
import { socialMedia } from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10'>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.key} className='flex flex-col my-4 min-w-[150px] '>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerlink.title}</h4>
              <ul>
                {footerlink.links.map((link, index) => (
                  <li key={link.name} class={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:text-secondary cursor-pointer mt-4`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='w-[95%] border-gray-800' />
      <div className='w-[95%] mt-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-between '>
        <p className='font-poppins text-white font-normal text-18px flex-start'>
          2021 HooBank. All Rights Reserved
        </p>
        <div className="flex gap-4">
          {socialMedia.map((social, index) => (
            <a href={social.link}>
              <img className={index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'} src={social.icon} key={social.id} alt={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
)

export default Footer