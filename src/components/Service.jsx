import React from 'react'
import { services } from '../constants'
import { Link } from 'react-router-dom'
import { gallery1 } from '../assets'

const Service = () => {
  return (
    <div id='services' className='flex flex-col vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div>
            <h1 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold'>
                Our Prorammes
            </h1>
        </div>
        <div className='gap-8 grid grid-rows-2 sm:grid-cols-2 flex-wrap justify-center items-center'>
            {
                services.map((service, index) => (
                    <div key={index} className={` p-4 bg-[#daa52050] rounded-lg`}>
                        <img src={service.img} alt="" className={`rounded-md ${index > 1 ? 'hidden' : ''}`} />
                        <div class name={`${index < 2 ? 'hidden' : 'flex'} justify-center items-center text-[20px] text-[#000] h-full w-full min-h-[200px] p-5`}>
                            Coming soon...
                        </div>
                        <h3 className='text-[30px] px-2 italic underline font-semibold'>
                            {service.title}
                        </h3>
                    </div>
                ))
            }
        </div>
        <div className='bg-[#ffe] flex flex-wrap drop-shadow-md gap-4 rounded-md md:p-10 p-5'>
            <h3 className='text-[24px] font-semibold'>
                Interested in what we do?
            </h3>
            <Link to={'/donation'} className='py-3 px-4 rounded-lg text-[#fff] make-donation duration-[1s] font-semibold'>
                Make a donation
            </Link>
        </div>
    </div>
  )
}

export default Service