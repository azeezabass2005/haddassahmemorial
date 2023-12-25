import React from 'react'
import { benefits } from '../constants'
import { gallery10, gallery9, haddassahlogo } from '../assets'

const Benefits = () => {
  return (
    <div className='flex flex-col vs:gap-[2.5rem] gap-[1rem] justify-center items-center py-10 md:py-20 border-b-[goldenrod] border-b-2'>
        <div>
            <h2 className='md:text-[34px] vs:text-[30px] text-[24px] font-semibold'>
                Benefits
            </h2>
        </div>
        <div className='flex md:flex-row vs:gap-[2.5rem] gap-[1rem] flex-col'>
            <div className='basis-3/5 flex flex-col gap-4'>
            <img src={gallery10} className="backdrop-grayscale rounded-lg border-4 border-[#daa520]" alt="Image 1" />
            <img src={gallery9} className="rounded-lg border-4 border-[#daa520]" alt="Image 1" />
            </div>
            <div className=' flex flex-col gap-6'>
                {benefits.map((benefit, index) => (
                    <div key={index} className='flex p-3 bg-[#ffe] drop-shadow-sm rounded-md gap-4'>
                        <div className='min-h-12 min-w-12 max-w-12 max-h-12 flex justify-center rounded-full drop-shadow-md bg-[#ffd] items-center'>
                            <img src={haddassahlogo} alt="" className='h-7 w-7' />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] font-semibold'>
                                {benefit.title}
                            </h2>
                            <p>
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Benefits