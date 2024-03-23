import React from 'react'

const Donation = () => {
  return (
    <div className='sm:px-16 md:px-24 px-4 py-4 md:pt-12 flex flex-col md:mt-20 mt-20 gap-4 border-b-2 justify-center items-center border-b-[goldenrod] min-h-[80vh]'>
        <h1 className='md:text-[35px] vs:text-[30px] text-[24px] font-semibold'>Donate</h1>
        <p className='italic text-[18px] max-w-[450px] text-center'>Thank you for considering a donation. Your contribution will go a long way in supporting our mission.</p>
        <div className='flex justify-center items-center mt-10 flex-wrap gap-12'>
            <div className='flex gap-4 flex-col'>
                <h2 className='text-[24px] font-semibold'>STANBIC IBTC BANK A</h2>
                <p className='text-[20px]'> <span className='font-semibold'>Account Number:</span> 0054314286</p>
                <p className='text-[20px]'> <span className='font-semibold'>Account Name:</span> HADDASSAH MEMORIAL FOUNDATION</p>
            </div>
            <div className='flex gap-4 flex-col'>
                <h2 className='text-[24px] font-semibold'>STANBIC IBTC BANK B</h2>
                <p className='text-[20px]'> <span className='font-semibold'>Account Number:</span> 0054314286</p>
                <p className='text-[20px]'> <span className='font-semibold'>Account Name:</span> HADDASSAH MEMORIAL FOUNDATION</p>
            </div>
        </div>
    </div>
  )
}

export default Donation