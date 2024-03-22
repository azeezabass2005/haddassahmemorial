import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../constants'
import { haddassahlogo, menuicon } from '../assets'
import { useState } from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const handleNavToggle = () => {
        setShowNav((prev) => {
            const newState = !prev
            document.body.style.overflowY = newState ? 'hidden' : 'visible'
            return newState
        })
    }

    const location = useLocation()
    const currentPage = location.pathname
    
  return (
    <>
        <div className='flex relative w-full top-0 items-center justify-between gap-10 sm:px-16 px-4 vs:py-3 xs:py-4 py-2 border-b-2 border-b-[goldenrod] bg-[transparent] backdrop-blur-2xl'>
            <div className='flex items-center gap-2'>
                <img src={haddassahlogo} alt="hm" className='h-12 w-12' />
                <Link to={'/'} className='text-[goldenrod] vs:flex hidden xs:text-[18px] text-[17px] font-bold'>
                    Hadassah Memorial
                </Link>
                <Link to={'/'} className='text-[goldenrod] vs:hidden flex text-[18px] font-bold'>
                    Hadassah M
                </Link>
            </div>
            <div className='md:flex hidden gap-10 justify-between basis-3/5'>
                <ul className='flex gap-8 items-center'>
                    {navLinks.map((navlink, index) => (
                        <li key={index} className='font-semibold hover:text-[goldenrod] hover:font-bold'>
                            <NavLink to={navlink.link}>
                                    {navlink.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-4'>
                    <a href='#contactus' className='border-[goldenrod] bg-[#fff] border-2 py-2 px-4 rounded-lg text-[#000] font-semibold'>
                        Contact Us
                    </a>
                    <Link to={'/donation'} className='py-3 px-4 rounded-lg text-[#fff] make-donation duration-[1s] font-semibold'>
                        Make a Donation
                    </Link>
                </div>
            </div>
            <div className='md:hidden flex'>
                <div onClick={handleNavToggle}>
                    <img src={menuicon} className='h-12 w-15' alt="menu" />
                </div>
                <div className={`absolute left-0 ${showNav ? '' : '-translate-x-full'}  flex justify-start vs:pl-10 pl-2 xs:p-5 p-2 xs:top-[81px] vs:top-[73px] top-[68px] bg-[#ffe] w-[100%] min-h-svh transform transition-all duration-500 ease-in-out`}>
                    <ul className='flex flex-col vs:gap-8 gap-2 w-full'>
                        {navLinks.map((navlink, index) => (
                            <li onClick={handleNavToggle} key={index} className='font-semibold hover:text-[goldenrod] hover:font-bold border-b-[goldenrod] border-b-2 py-2 px-1'>
                                <NavLink to={navlink.link}>
                                    {navlink.name}
                                </NavLink>
                            </li>
                        ))}
                        <li onClick={handleNavToggle} className='font-semibold hover:text-[goldenrod] hover:font-bold border-b-[goldenrod] border-b-2 py-2 px-1'>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                        <div className='flex gap-4  border-b-[goldenrod] border-b-2 pb-3 px-1'>
                            <a onClick={handleNavToggle} href='#contactus' className='border-[goldenrod] border-2 py-2 px-4 rounded-lg text-[#000] font-semibold'>
                                Contact Us
                            </a>
                            <Link onClick={handleNavToggle} to={'/donation'} className='py-3 px-4 rounded-lg text-[#fff] make-donation duration-[1s] font-semibold'>
                                Make a Donation
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar