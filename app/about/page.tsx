import React from 'react';
import About1 from "@/components/About1"

export default function Hero2() {
  return (
    <>
   
   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-2xl font-bold">Bendage</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a  href="/"className="mr-5 hover:text-gray-900">Home</a>
      <a href='/product' className="mr-5 hover:text-gray-900">Product</a>
      <a href='/pricing' className="mr-5 hover:text-gray-900">Pricing</a>
      <a href='/contact' className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <a href="" className='mr-10 text-blue-600 text-md'>Log In</a>
    <button className="inline-flex  text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0" ><span className='text-center font-semibold ml-3'>
    Become a Member </span> 
     

    </button>
  </div>
</header>

   

    <section
      className="text-gray-600 body-font "
      style={{
        backgroundImage: `url('/hero-2.png')`, // Path to your image in the public folder
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
            ABOUT COMPANY
          </h2>
          <h1 className="title-font text-6xl text-black  ml-10 mb-7 font-bold">
            ABOUT US
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed ml-10 text-2xl text-black">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="flex justify-center font-semibold">
            <button className="inline-flex  bg-blue-500 border-0  ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">
            Get Qoute Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <About1 />
    </>
  );
}
