import React from 'react';
import Footer from "@/components/Footer";

export default function Hero2() {
  return (
    <>
      <section
        className="text-gray-600 body-font"
        style={{
          width: 'full', // Total width of the section
          height: '636px', // Total height of the section
          display: 'flex',
          backgroundColor: 'rgba(42, 124, 199, 1)', // Optional: Set background color for the section
        }}
      >
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          style={{
            backgroundColor: 'rgba(42, 124, 199, 1)', // Left side will have a blue background
            width: '50%', // Limit the blue background to the left half
            color: 'white',
            height: '636px', // Full section height
          }}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="mb-4 ml-10 font-bold">WORK WITH US</h2>
            <h1 className="title-font text-5xl ml-10 mb-7 font-semibold">
              Now Let&apos;s Grow Yours
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed ml-10 text-sm">
              The gradual accumulation of information about atomic and
              <br />
              small scale behavior during the first quarter of the 20th
            </p>
            <div className="flex justify-center text-md">
              <button className="inline-flex border-2 border-white ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex-grow"
          style={{
            backgroundImage: `url('/unsplash_v.png')`, // Right side will have the image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '640px', // Set the height of the image container
            width: '590px', // Set the width of the image container
          }}
        ></div>
      </section>
      <Footer />
    </>
  );
}
