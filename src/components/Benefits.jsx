import React from 'react'
import { benefits } from '../constants'
import { gallery10, gallery9, haddassahlogo } from '../assets'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <div className='flex flex-col vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div>
            <h2 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold'>
                Our Founders
            </h2>
        </div>
        <div className='flex md:flex-row vs:gap-[2.5rem] gap-[1rem] flex-col'>
            <div className='basis-3/5 flex flex-col gap-4'>
                <img src={gallery10} className="backdrop-grayscale rounded-lg border-4 border-[#daa520]" alt="Image 1" />
                <img src={gallery9} className="rounded-lg border-4 border-[#daa520]" alt="Image 1" />
            </div>
            <div className='flex flex-col gap-5 basis-3/5'>
                <h2 className="md:text-[35px] vs:text-[30px] text-[24px] font-semibold">
                    About Our Founders
                </h2>
                <p className=" md:text-[18px] text-[16px] leading-[30px] text-[#333]">
                    Pastor and Mrs Raymond Arumona, A remarkable couple whose unwavering commitment to the betterment of society has illuminated the path toward a brighter, more equitable future. Meet Pastor and Mrs Raymond Arumona, the pioneers of a mission dedicated to the providing essential support for vulnerable individuals and and championing higher living standards.
                </p>
                <p className=" md:text-[18px] text-[16px] leading-[30px] text-[#333]">
                    Their journey began with a shared belief in the tranformative power of empathy and the importance of ensuring that every member of our community had an equal opportunity to flourish. With a vision to improve the living standards of vulnerable persons.
                </p>
                <div className='flex flex-wrap gap-4'>
                <a href='#contactus' className='border-[goldenrod] border-2 py-2 px-4 rounded-lg text-[#000] font-semibold'>
                    Contact Us
                </a>
                <Link to={'/about'} className='py-3 px-4 rounded-lg text-[#fff] make-donation duration-[1s] font-semibold'>
                    About Us
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits