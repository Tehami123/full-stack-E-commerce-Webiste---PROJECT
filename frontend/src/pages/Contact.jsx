import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contant = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>739813 Willms Station Burak <br /> Suite 4729 near jenga Mall, USA</p>
          <p className='text-gray-500'>Tel: (382) 839-389-7392 <br />Email:Forever@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers At Forever</p>
          <p className='text-gray-500'>Learn more about our team and job opening and other events</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contant