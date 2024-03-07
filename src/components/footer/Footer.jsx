import React from 'react';
import { FiMapPin } from "react-icons/fi";
import yt from '../../assets/icon.png'
import ln from '../../assets/Union.png'
import logoW from '../../assets/LOGO white.png'

const Footer = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<footer className="bg-blue-600 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

    <div className="flex lg:items-center justify-around">
     

      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">

        <div className="col-span-1 sm:col-span-1">
          <p className="font-medium text-white">Address</p>

         <p className='max-w-44 mt-5'>
            House- 75 Ka,Main Rd,Dhaka 1216 
          <span className='flex items-center gap-2'>  <FiMapPin/> View On Map</span>
         </p>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-white">About Us</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Stories </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Blog </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Airlines </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Testimonials </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-white">Join Us</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Terms of Service </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Privacy Policy </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Support </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-white">Contact</p>

          <ul className="mt-6 space-y-2 text-sm">
           <li>
           <li>
              <a href="#" className="text-white transition hover:opacity-75"> +880 1234567890 </a>
            </li>
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> +880 1234567890 </a>
            </li>
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> +880 1234567890 </a>
            </li>
           </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> info@airbook.com </a>
            </li>
          
          </ul>
        </div>

       
      </div>
    </div>

    <div className="mt-8 border-t border-gray-100 p-4">
      <div className="flex flex-col md:flex-row items-center justify-around">

    <img src={logoW} className='w-28' alt="" />


        <p className="text-xs text-white">&copy; Copyright AIRBOOK.</p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >

              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <img src={ln} className='w-6' alt="" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

             <img src={yt} className='w-6' alt="" />
            </a>
          </li>

         
        </ul>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;