import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '@/components/Footerpage';

export default function page() {
  return (
    <>
     {/* Navigation and Intro */}
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <span className="ml-3 text-2xl font-bold">Bendage</span>
     </a>
     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <a href="/" className="mr-5 hover:text-gray-900">
         Home
       </a>
       <a href="/product" className="mr-5 hover:text-gray-900">
         Product
       </a>
       <a href="/pricing" className="mr-5 hover:text-gray-900">
         Pricing
       </a>
       <a href="/contact" className="mr-5 hover:text-gray-900">
         Contact
       </a>
     </nav>
     <a href="" className="mr-10 text-blue-600 text-md">
       Log In
     </a>
     <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
       <span className="text-center font-semibold ml-3">Become a Member</span>
     </button>
   </div>
    <section
    className="text-gray-600 body-font "
    style={{
      backgroundImage: `url('/hero-2-bg-.png')`, // Path to your image in the public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Full-screen height
      color: 'white',
    }}
  >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="mb-4 ml-10 font-bold text-black">
          CONTACT US
        </h2>
        <h1 className="title-font text-6xl text-black  ml-10 mb-7 font-bold">
          Get in touch <br />today
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed ml-10 text-xl text-black">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>
        <h2 className="mb-4 ml-10 font-bold text-gray-800 text-lg">
          Phone : +451 215 215
        </h2>
        <h2 className="mb-4 ml-10 font-bold text-gray-800 text-lg">
          Fax : +451 215 215
        </h2>
        <div className="flex justify-center font-semibold ml-10">
           {/* Social Media Icons */}
      <div className="flex space-x-6 ">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle className='text-2xl text-black' />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className='text-2xl text-black ' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <RiInstagramFill  className='text-2xl text-black'/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-2xl text-black ' />
        </a>
      </div>
    </div>
    </div>
    </div>
</section>
 {/* Pricing Plans */}
 <div className="container mx-auto mt-16 flex justify-center">
        {/* Free Plan */}
        <div className="w-[300px] h-[340px] rounded-2xl p-6 ">
          <h2 className="text-xl font-bold text-center ml-14">
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_232_735)">
          <path d="M56.929 38.9947C56.5775 38.6426 56.16 38.3632 55.7004 38.1726C55.2408 37.982 54.7482 37.8839 54.2506 37.8839C53.7531 37.8839 53.2604 37.982 52.8008 38.1726C52.3413 38.3632 51.9238 38.6426 51.5722 38.9947L45.5335 45.0334C42.7339 44.1999 37.5097 42.3057 34.1987 38.9947C30.8876 35.6836 28.9934 30.4594 28.16 27.6598L34.1987 21.6211C34.5508 21.2696 34.8301 20.8521 35.0207 20.3925C35.2113 19.9329 35.3094 19.4403 35.3094 18.9427C35.3094 18.4452 35.2113 17.9525 35.0207 17.4929C34.8301 17.0333 34.5508 16.6159 34.1987 16.2643L19.0451 1.11076C18.6936 0.758646 18.2761 0.479298 17.8165 0.288701C17.3569 0.0981045 16.8642 0 16.3667 0C15.8692 0 15.3765 0.0981045 14.9169 0.288701C14.4573 0.479298 14.0398 0.758646 13.6883 1.11076L3.41418 11.3849C1.97459 12.8245 1.16387 14.802 1.19418 16.8212C1.28131 22.2159 2.70954 40.9533 17.4767 55.7204C32.2439 70.4876 50.9813 71.912 56.3797 72.003H56.4858C58.4861 72.003 60.3765 71.215 61.8085 69.783L72.0826 59.5088C72.4347 59.1573 72.7141 58.7398 72.9047 58.2802C73.0953 57.8207 73.1934 57.328 73.1934 56.8304C73.1934 56.3329 73.0953 55.8402 72.9047 55.3807C72.7141 54.9211 72.4347 54.5036 72.0826 54.1521L56.929 38.9947ZM56.4479 64.4224C51.72 64.3428 35.5435 63.0737 22.8335 50.3599C10.0818 37.6081 8.84674 21.3749 8.77097 16.7417L16.3667 9.14594L26.1635 18.9427L21.2651 23.8411C20.8198 24.2861 20.4924 24.835 20.3125 25.4382C20.1326 26.0414 20.1058 26.68 20.2346 27.2961C20.3256 27.7318 22.5494 38.0627 28.8381 44.3515C35.1268 50.6402 45.4578 52.864 45.8934 52.9549C46.5092 53.0874 47.1484 53.0627 47.7522 52.8833C48.356 52.7039 48.9049 52.3755 49.3485 51.9283L54.2506 47.0299L64.0474 56.8267L56.4479 64.4224Z" fill="#23A6F0"/>
         </g>
         <defs>
        <clipPath id="clip0_232_735">
       <rect width="72" height="72" fill="white" transform="translate(0.5)"/>
     </clipPath>
      </defs>
       </svg>
          </h2>
          
          <p className="text-center font-bold mt-4">
          georgia.young@example.com
          georgia.young@ple.com
          </p>
          <button className="inline-flex  border-2 border-blue-600 mt-5  ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white ">
            Submit Request
            </button>
         
         
        </div>

        {/* Standard Plan */}
        <div className="bg-blue-950 text-white w-[320px] h-[300px] rounded-lg p-6 shadow-lg transform scale-105">
          <h2 className="text-2xl font-bold mb-4 text-center ml-20">
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M36.5 3C22.4168 3 11 14.3074 11 28.2559C11 32.9206 11.9219 37.7384 14.5673 41.2109L36.5 70L58.4327 41.2109C60.8356 38.0569 62 32.4811 62 28.2559C62.0001 14.3074 50.5833 3 36.5 3ZM36.5 17.6276C42.4257 17.6276 47.231 22.3869 47.231 28.2558C47.231 34.1248 42.4257 38.8841 36.5 38.8841C30.5743 38.8841 25.7691 34.1248 25.7691 28.2559C25.7691 22.3869 30.5743 17.6276 36.5 17.6276Z" fill="#23A6F0"/>
      </svg>
      </h2>
           <p className="text-center font-bold mt-4">
          georgia.young@example.com
          georgia.young@ple.com
          </p>
          <button className="inline-flex  border-2 border-blue-600 mt-5  ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white ">
            Submit Request
            </button>
         
        </div>

        {/* Premium Plan */}
        <div className=" w-[300px] h-[340px] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-center ml-20 ">
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_232_755)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.225 16.1271C1.67868 14.1024 2.79395 12.2946 4.38815 10.9997C5.98235 9.70493 7.96098 8.99986 10 9H64C66.039 8.99986 68.0177 9.70493 69.6118 10.9997C71.206 12.2946 72.3213 14.1024 72.775 16.1271L37 38.3975L1.225 16.1271ZM1 21.3612V53.9212L27.1135 37.6137L1 21.3612ZM31.4245 40.3042L1.8595 58.7612C2.58997 60.3301 3.74287 61.6553 5.18402 62.5827C6.62516 63.5102 8.29529 64.0017 10 64H64C65.7044 64.0004 67.3739 63.5078 68.8143 62.5796C70.2546 61.6513 71.4065 60.3256 72.136 58.7567L42.571 40.2996L37 43.7692L31.4245 40.2996V40.3042ZM46.8865 37.6183L73 53.9212V21.3612L46.8865 37.6137V37.6183Z" fill="#23A6F0"/>
</g>
<defs>
<clipPath id="clip0_232_755">
<rect width="72" height="72" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
    </h2>
    <p className="text-center font-bold mt-4">
          georgia.young@example.com
          georgia.young@ple.com
          </p>
          <button className="inline-flex  border-2 border-blue-600 mt-5  ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white ">
            Submit Request
            </button>
         
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen  ">
        <span className='mb-5'><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.9052 61.2058C44.5713 62.0869 45.8256 62.2611 46.7067 61.5949L61.0645 50.7389C61.9456 50.0727 62.1198 48.8184 61.4536 47.9374C60.7874 47.0563 59.5331 46.8821 58.6521 47.5483L45.8896 57.1981L36.2398 44.4356C35.5736 43.5545 34.3193 43.3803 33.4382 44.0465C32.5572 44.7127 32.383 45.9669 33.0491 46.848L43.9052 61.2058ZM0.367223 4.49559C13.131 5.34642 22.0886 9.24913 28.4012 14.4985C34.7283 19.7599 38.5351 26.4888 40.7922 33.1997C43.0521 39.9191 43.7382 46.5647 43.8525 51.5532C43.9095 54.0417 43.8239 56.1028 43.7249 57.5345C43.6755 58.2501 43.6228 58.8073 43.5831 59.181C43.5632 59.3678 43.5466 59.5086 43.5354 59.6003C43.5297 59.6461 43.5254 59.6796 43.5227 59.7005C43.5213 59.7109 43.5203 59.7181 43.5198 59.7221C43.5195 59.7242 43.5194 59.7254 43.5193 59.7257C43.5193 59.7259 43.5193 59.7256 43.5193 59.7257C43.5194 59.7252 43.5195 59.7245 45.5005 59.9996C47.4815 60.2747 47.4816 60.2736 47.4818 60.2722C47.4819 60.2715 47.4821 60.27 47.4823 60.2685C47.4827 60.2656 47.4832 60.2619 47.4838 60.2574C47.485 60.2483 47.4867 60.236 47.4887 60.2204C47.4928 60.1893 47.4985 60.1453 47.5054 60.0889C47.5193 59.976 47.5384 59.8132 47.5607 59.6036C47.6052 59.1846 47.6623 58.5782 47.7154 57.8104C47.8215 56.2753 47.9117 54.0903 47.8515 51.4616C47.7313 46.2158 47.0111 39.1427 44.5835 31.9246C42.153 24.6981 37.991 17.2708 30.9587 11.423C23.9119 5.56306 14.1195 1.40343 0.63327 0.50445L0.367223 4.49559Z" fill="#23A6F0"/>
</svg>
</span>
      {/* Heading */}
      <h2 className='text-md mb-5 font-semibold '>WE CAN'T WAIT TO MEET YOU</h2>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Let's Talk
      </h1>

    

      {/* Button */}
      <button className="bg-blue-500 rounded-xl text-white px-6 py-3 font-semibold hover:bg-blue-700 mb-6">
        Try It Free Now 
      </button>
      </div>
      <Footer />
   </>
  )
}
