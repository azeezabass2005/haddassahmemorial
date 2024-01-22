import React from 'react'
import { gallery1, gallery3 } from '../assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col vs:gap-[2rem] gap-[1rem] justify-center items-center py-4 md:pb-12 border-b-[goldenrod] border-b-2'>
        <div className='flex flex-col vs:gap-2 gap-1 basis-3/5'>
            <p className='bg-[#ffe] uppercase text-[15px] font-semibold drop-shadow-md w-fit py-1 px-2 rounded-md'>
                At Hadassah 😊
            </p>
            <h2 className='md:text-[35px] vs:text-[30px] text-[24px] font-semibold md:max-w-[540px]'>
                Welcome To The Hadassah Foundation. Supporting Vulnerable Families and Individuals.
            </h2>
            <p className='md:text-[18px] text-[16px] leading-[30px] text-[#333] md:max-w-[500px] mb-4 mt-4'>
                Our organization is deeply committed to fostering a culture of learning, volunteering, and community service. We believe in the transformative power of education and the importance of giving back to society. Our mission is to empower individuals through knowledge, inspire change through collective action, and promote a sense of community among our members.
            </p>
            <div className='flex flex-wrap gap-4'>
                <a href='#contactus' className='border-[goldenrod] border-2 py-2 px-4 rounded-lg text-[#000] font-semibold'>
                    Contact Us
                </a>
                <Link to={'/donation'} className='py-3 px-4 rounded-lg text-[#fff] make-donation duration-[1s] font-semibold'>
                    Make a Donation
                </Link>
            </div>
        </div>
        <div className="flex flex-col gap-4 basis-1/2">
            {/* First image with overlay */}
            <img src={gallery1} className="rounded-lg border-4 border-[#daa520]" alt="Image 1" />
            <img src={gallery3} className="rounded-lg border-4 border-[#daa520]" alt="Image 1" />
        </div>

    </div>
  )
}

export default Hero