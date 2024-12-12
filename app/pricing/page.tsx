"use client"
import React, { useState } from 'react';
import Pricingfaq from '@/components/PricingFaq';
import Freetrial from '@/components/Freetrial';

export default function Page() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-bold">Bendage</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">Home</a>
            <a href="/product" className="mr-5 hover:text-gray-900">Product</a>
            <a href="/pricing" className="mr-5 hover:text-gray-900">Pricing</a>
            <a href="/contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <a href="" className="mr-10 text-blue-600 text-md">Log In</a>
          <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
            <span className="text-center font-semibold ml-3">Become a Member</span>
          </button>
        </div>
      </header>

      {/* Heading */}
      <div className="flex flex-col text-center w-full mt-20">
        <h3 className="mb-4 text-sm font-bold text-gray-600">Pricing</h3>
        <h1 className="text-5xl font-bold title-font mb-4 text-gray-900">Simple Pricing</h1>
        <p className="text-gray-600 mb-6 text-base">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <span className={`font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          <div
            className={`w-14 h-7 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer ${
              isYearly ? 'bg-blue-400' : ''
            }`}
            onClick={handleToggle}
          >
            <div
              className={`h-5 w-5 bg-white rounded-full shadow-md transform duration-300 ${
                isYearly ? 'translate-x-7' : ''
              }`}
            ></div>
          </div>
          <span className={`font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <div className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-sm font-semibold">
              Save 25%
            </div>
          )}
        </div>

        {/* Breadcrumb */}
        <div className="flex justify-center mt-4 items-center space-x-2">
          <a href="/" className="text-black hover:underline text-xl font-semibold">Home</a>
          <span className="text-gray-600 text-2xl">{'>'}</span>
          <a href="/pricing" className="text-gray-700 font-semibold text-xl hover:underline">Pricing</a>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="container mx-auto mt-16 flex justify-center">
        {/* Free Plan */}
        <div className="w-[300px] h-[340px] rounded-2xl p-6 border-2 border-blue-600">
          <h2 className="text-xl font-bold text-center">FREE</h2>
          <h3 className="mt-9 text-center text-md text-gray-600 font-semibold">
            Organize across all <br /> apps by hand
          </h3>
          <p className="text-center text-2xl text-blue-600 font-bold mt-4">
            0 $ <span className="text-sm">Per Month</span>
          </p>
          <ul className="mt-6 text-gray-600">
            <li className="flex items-center text-gray-700 text-sm mb-3">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="bg-blue-950 text-white w-[320px] h-[350px] rounded-lg p-6 shadow-lg transform scale-105">
          <h2 className="text-2xl font-bold mb-4 text-center">STANDARD</h2>
          <h3 className="mt-9 text-center text-md font-semibold">
            Organize across all <br /> apps by hand
          </h3>
          <p className="text-center text-2xl font-bold mt-4 text-blue-600">
            9.99 $<span className="text-sm text-gray-300">Per Month</span>
          </p>
          <ul className="mt-6">
            <li className="flex items-center text-sm mb-3">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
            <li className="flex items-center text-sm">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-100 w-[300px] h-[340px] rounded-2xl p-6 border-2 border-blue-500">
          <h2 className="text-xl font-bold text-center">PREMIUM</h2>
          <h3 className="mt-9 text-center text-md text-gray-600 font-semibold">
            Organize across all <br /> apps by hand
          </h3>
          <p className="text-center text-2xl text-blue-600 font-bold mt-4">
            $19.99 <span className="text-sm">Per Month</span>
          </p>
          <ul className="mt-6 text-gray-600">
            <li className="flex items-center text-gray-700 text-sm mb-3">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <img src="/icn-circle.png" alt="" className="h-5 w-5 mr-2" />
              Unlimited product updates
            </li>
          </ul>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="container mx-auto mt-16 text-center">
        <h3 className="text-gray-700 font-bold mb-6">Trusted By Over 4000 Big Companies</h3>
        <div className="flex justify-center space-x-6">
          <img src="/col-md-2.png" alt="Hooli" className="h-10" />
          <img src="/col-md-2 (1).png" alt="Lyft" className="h-10" />
          <img src="/col-md-2 (2).png" alt="Stripe" className="h-10" />
          <img src="/col-md-2 (3).png" alt="AWS" className="h-10" />
          <img src="/col-md-2 (4).png" alt="Reddit" className="h-10" />
          <img src="/col-md-2 (5).png" alt="Reddit" className="h-10" />
        </div>
      </div>
      <Pricingfaq />
      <Freetrial />
    </>
  );
}
