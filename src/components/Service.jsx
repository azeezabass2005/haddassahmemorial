import React from 'react'
import { services } from '../constants'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div id='services' className='flex flex-col vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div>
            <h1 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold'>
                Our Services
            </h1>
        </div>
        <div className='flex flex-row gap-8 flex-wrap justify-center items-center'>
            {
                services.map((service, index) => (
                    <div key={index} className='bg-[#daa520] rounded-b-md pt-[0.4rem] max-w-[300px]'>
                        <div className='flex flex-col bg-[#fff] drop-shadow-md p-3 rounded-b-md'>
                            <div className='flex gap-8 items-center p-2'>
                                <img src={service.img} alt={service.title} className='h-10 w-10' />
                                <h3 className='font-semibold text-[24px]'>{service.title}</h3>
                            </div>
                            <div className='flex p-2 bg-[#ffe] rounded-b-md drop-shadow-md gap-2'>
                                <div className='flex items-center flex-col'>
                                    <div className='min-h-4 min-w-4 bg-[#daa520] rounded-full' />
                                    <div className='w-1 h-full rounded-b-md bg-[#daa520]' />
                                </div>
                                <p>
                                    {service.description}
                                </p>
                            </div>
                        </div>
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