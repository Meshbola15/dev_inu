/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/chapters.svg'
import image_mobile from '../assets/chapters_mobile.svg'

const Chapters = () => {
  return (
    <div className='px-auto w-screen top_padding body_padding'>
      <img src={image} alt="chapters_image" className='hidden mx-auto md:block' />
      <img src={image_mobile} alt="chapters image" className="block mx-auto md:hidden" />
    </div>
  )
}

export default Chapters
