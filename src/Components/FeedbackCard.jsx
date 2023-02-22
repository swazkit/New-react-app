import React from 'react'
import { quotes } from '../assets'
import styles from '../styles'

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 feedback-card'>
        <img className='w-[42px] h-[27px] object-contain' src={quotes} alt="double-quotes" />
        <p className='font-poppins text-white leading-[32px] font-normal text[18px] my-10'> {content} </p>
        <div className="grid grid-flow-col">
            <img className='w-10' src={img} alt="" />
            <div className="flex flex-col">
                <h4 className='text-[20px] text-white font-poppins font-normal'> {name} </h4>
                <p className='font-poppins text-[16px] text-gray-400'> {title} </p>
            </div>
        </div>
    </div>
)

export default FeedbackCard