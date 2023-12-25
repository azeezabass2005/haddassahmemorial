import React from 'react'
import { locationlogo, call, mail, facebook, twitter, whatsapp, } from '../assets'

const Contact = () => {
  return (
    <div id='contactus' className='flex flex-col flex-wrap vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div>
            <h1 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold'>
                Contact us
            </h1>
        </div>
        <div className='flex gap-12 w-full flex-wrap justify-around'>
            <div className='flex gap-4'>
                <img src={locationlogo} alt="location" className='h-14 w-14' />
                <address>
                    Haddassah Memorial <br />
                    5, Lorem Address <br />
                    Ikeja Lagos <br />
                    Nigeria
                </address>
            </div>
            <div className='flex flex-col gap-4'>
                <a href="tel:+2349160649124" className='flex gap-2'>
                    <img src={call} alt="" className='h-8 w-8' />
                    <p>
                        +2349160649124
                    </p>
                </a>
                <a href="mailto:info@haddassahmemorial.com" className='flex gap-2'>
                    <img src={mail} alt="" className='h-8 w-8' />
                    <p>
                        info@haddassahmemorial.com
                    </p>
                </a>
            </div>
            <div className='flex gap-8'>
                <a href="#">
                    <img src={facebook} alt="" className='h-8 w-8' />
                </a>
                <a href="#">
                    <img src={twitter} alt="" className='h-8 w-8' />
                </a>
                <a href="#">
                    <img src={whatsapp} alt="" className='h-8 w-8' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact