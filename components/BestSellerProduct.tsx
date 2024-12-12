import React from 'react'
import Brand from "@/components/Brand";
import FooterPage from "@/components/Footerpage"
import Footer from '@/components/Footerpage';
export default function BestSellerProduct() {
  return (
    <>
    <div>
    {/* Headings */}
    <div className=" mt-5 ml-5 shadow-sm ">
    <h1 className="text-4xl font-bold mt-5 border-b-2 border-gray-300 ">BestSeller Products</h1>
   </div>
  
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* First Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product1.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Second Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product2.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Third Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product3.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Fourth Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product4.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>

        </div>
      </div>

      {/* Fifth Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product5.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Sixth Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product6.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Seventh Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/product7.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>

      {/* Eighth Product */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidden h-[280px] w-[239px] ml-5">
          <img alt="ecommerce" className="object-cover object-center  block" src="/product8.png" />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Graphic Design</h2>
          <p className="mt-1">English Development</p>
          <p className="mt-1 text-gray-400 text-lg font-semibold">$16.48 <span className='text-green-700 ml-2 font-bold text-lg'>$6.48</span></p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<Brand />
<Footer />
</>

  )
}
