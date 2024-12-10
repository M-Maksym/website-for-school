"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Link from "next/link";
import AnimatedElement from '../Animation/AnimatedElement';
import HamburgerIcon from './HamburgerIcon';

export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false)

  
  return (
    <>
      <div className='sticky bg-white bg-opacity-40 top-0 z-50 backdrop-blur-2xl transform transition-all duration-1000 ease-in-out'>
        <nav className="bg-transparent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">

            {/* college name and logo  */}
            <Link href="/" className="flex items-center space-x-3">
              {/* <img src="/collegelogo.png" className="h-6 md:h-8 lg:h-10" alt="AOT Logo" /> */}
              <AnimatedElement className="font-bold  font-serif text-xs sm:text-lg text-[#066466] mr-8">
              Новгородківська філія Ліцею Новгородківської селищної ради
                <div className="text-[8px] sm:text-xs text-right ">
                  Успіх починається зі знань!
                </div>
              </AnimatedElement>
            </Link>

            <button className='md:hidden' onClick={() => { setNavOpen(prev => !prev) }} >
              <HamburgerIcon NavOpen={NavOpen} />
            </button>
          </div>
        </nav>

        <nav className="bg-transparent flex justify-evenly items-center">
          <div className={`items-center justify-center ${NavOpen ? 'h-96 p-2' : 'h-0'} transition-transition-height duration-500 ease-in-out overflow-hidden md:overflow-visible md:h-full md:p-2 w-full md:flex bg-[#066466] md:order-1`} >


            {/* Nav Links */}
            <AnimatedElement>
              <ul className="flex  flex-col p-2 md:p-0 font-medium md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <NavLinks />
              </ul>
            </AnimatedElement>
          </div>
        </nav>
      </div>

      <div className='scroll-watcher'></div>

    </>
  )
}