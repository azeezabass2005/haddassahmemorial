import React from 'react'
import { gallery2, quoteicon, gallery8 } from '../assets'

const AboutSection = () => {
  return (
    <div id='about' className='flex md:flex-row-reverse flex-col vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div className='flex flex-col vs:gap-5 gap-2 basis-3/5'>
            <h2 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold md:max-w-[540px]'>
                About us
            </h2>
            <p className='md:text-[18px] text-[16px] leading-[30px] text-[#333]'>
            Haddassah Memorial is a community deeply committed to learning, volunteering, and community service. Our aim is to inspire change and promote volunteerism for a better tomorrow. We believe in the transformative power of education and the importance of giving back to society. Our mission is to empower individuals, inspire change, and promote a sense of community. Every individual has the capacity to make a difference, and we strive to provide the resources and opportunities necessary to unlock this potential. Join us at Haddassah Memorial, where we are more than just an organization; we are a movement, a community, and a family.
            </p>
            <div className=' bg-[goldenrod] pl-1 rounded-md drop-shadow-lg relative max-w-[370px] md:ml-4'>
              <div className='bg-[#fff] rounded-md py-2 pl-10 pr-5 flex'>
                <img src={quoteicon} alt="quote" className='h-5 w-5 absolute top-[-10px] left-[20px] drop-shadow-md' />
                <p className='italic'>
                One act of kindness a day can change the world. <br /> <span className='font-semibold flex justify-end'> &#8212; Betty Williams</span>
                </p>
              </div>
            </div>
        </div>
        <div className="flex flex-row gap-5 basis-3/5 sm:w-[] w-full min-h-[70vh] aboutimg relative">
            <img src={gallery2} className="rounded-lg h-[300px] w-[250px] min-w-[220px]" alt="Image 1" />
            <img src={gallery8} className=" absolute top-[50px] right-0 rounded-lg h-[300px] w-[250px] min-w-[220px] md:mt-40 mt-12" alt="Image 1" />
        </div>

    </div>
  )
}

export default AboutSection