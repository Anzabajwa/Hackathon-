import React from 'react';

export default function Hero2() {
  return (
    <>
    <section
      className="text-gray-600 body-font"
      style={{
        backgroundColor: "rgb(35,133,109)", // Green background
        height:"107vh", // Full-screen height
        color: 'white',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-between">
        {/* Left side: Text content */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="mb-4 font-bold text-xl">
            Summer 2020
          </h2>
          <h1 className="title-font text-5xl mb-7 font-semibold">
            Vita Classic 
            <br className="hidden lg:inline-block" />
            Product
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">
            We know how large objects will act,
            <br />
            how are objects will act, we know
          </p>
          <div className="flex justify-center text-4xl">
       <h2 className='mr-5 text-2xl mt-4 font-bold'>$16.48  </h2>

            <button className="inline-flex bg-green-600 border-0 py-2 px-6 text-2xl focus:outline-none hover:bg-indigo-600 rounded">
            Add to cart
            </button>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center items-center  ">
          <img
            src="/shop-hero-2-png-picture-1.png" // Image path from the public folder
            alt="Hero Image"
            className="" // Ensure the image is contained within the bounds of the container
          />
        </div>
      </div>
    </section>
    
    <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/clothes 1.png" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest mt-10 font-bold">Summer 2020</h2>
       <br /> <h1 className="text-gray-900 text-4xl title-font font-bold mb-1 mt-3">Part of the Neural <br />Universe</h1>
       <p className="mb-8 leading-relaxed  text-1xl">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="flex mt-6 items-center h-[70px] w-[400px] ">
  <button className="flex text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded  h-[52px] w-[200px] text-xl font-mono">Buy Now </button>
  <button className="flex text-green-900 font-sans text-center ml-5 bg-white border-2 border-green-700 py-2 px-8 focus:outline-none  rounded  h-[52px] w-[200px] text-xl">Read More</button>
</div>

      </div>
    </div>
  </div>
</section>

</>
  );
}
