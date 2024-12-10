import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <AnimatedElement className=' rounded-lg '>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9295269261065!2d88.37397647408291!3d22.95282237922273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1713956112554!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.3628128044353!2d32.671370028837266!3d48.34608516739678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d2240ebebebc15%3A0x1234567890abcdef!2sNovgorodka%20Branch!5e0!3m2!1suk!2sua!4v1733863001977!5m2!1suk!2sua" width="100%" height="400" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            </AnimatedElement>
          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">

            {/* AOT Online */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Новгородківська філія Ліцею Новгородківської селищної ради</h2>
              <nav className="list-none mb-10">               
                <li>
                  <a target='_blank' href='https://www.facebook.com/profile.php?id=100035495072398' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Facebook</a>
                </li>
                <li>
                  <a target="_blank" href="mailto:n-shkola3@ukr.net" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; n-shkola3@ukr.net</a>                </li>
                <li>
                  <a target='_blank' href='https://www.facebook.com/profile.php?id=100035495072398' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Єдина школа</a>
                </li>

              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Адреса</h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">Україна,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Кіровоградська область,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">р-н Кропивницький, ттг Кам'янецька</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">вул. Квітнева, 74,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">28200</p>
              <a target="_blank" href="mailto:n-shkola3@ukr.net" className="text-white hover:text-gray-300 cursor-pointer">n-shkola3@ukr.net</a>
              </div>

          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 Новгородківська філія Ліцею Новгородківської селищної ради
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}