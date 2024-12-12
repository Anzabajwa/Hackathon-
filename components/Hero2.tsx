import React from 'react';

export default function Hero2() {
  return (
    <section
      className="text-gray-600 body-font "
      style={{
        backgroundImage: `url('/HeroSection.jpg')`, // Path to your image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full-screen height
        color: 'white',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="mb-4 ml-10 font-bold">
            Summer 2020
          </h2>
          <h1 className="title-font text-5xl ml-10 mb-7 font-semibold">
            New Collection
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed ml-10 text-2xl">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="flex justify-center text-4xl">
            <button className="inline-flex  bg-green-500 border-0  ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
