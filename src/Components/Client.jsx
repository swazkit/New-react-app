import React from 'react'
import styles, { layout } from '../styles'
import { clients } from '../constants'

const Client = () => {
  return (
    <div className={` flex-wrap flex flex-row justify-between md:gap-4 sm:gap-8 mx-8 gap-8 my-12 items-center`}>
      {
        clients.map(client => (
          <img className='sm:w-[192px] w-[100px] object-contain' key={client.id} src={client.logo} alt={client.logo} />
        ))
      }
    </div>
  )
}

export default Client