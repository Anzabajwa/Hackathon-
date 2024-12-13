import Image from 'next/image'; // Import Image from Next.js

export default function ImageContainer() {
  return (
    <div className="w-full h-[150px] mx-auto flex justify-between items-center bg-gray-100 px-4 ">
      {/* Box 1 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center">
        <Image 
          src="/Vector.png" 
          alt="Brand 1" 
          className="w-full h-full object-contain mr-10 ml-8"
          width={120}  // Specify width
          height={120} // Specify height
        />
      </div>
      {/* Box 2 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center">
        <Image 
          src="/Vector (1).png" 
          alt="Brand 2" 
          className="w-full h-full object-contain mr-10"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 3 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center">
        <Image 
          src="/Vector (2).png" 
          alt="Brand 3" 
          className="w-full h-full object-contain mr-10"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 4 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center">
        <Image 
          src="/Vector (3).png" 
          alt="Brand 4" 
          className="w-full h-full object-contain mr-10"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 5 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center mr-10">
        <Image 
          src="/Vector (4).png" 
          alt="Brand 5" 
          className="w-full h-full object-contain mr-10"
          width={120} 
          height={120} 
        />
      </div>
      {/* Box 6 */}
      <div className="w-[120px] h-[120px] flex justify-center items-center">
        <Image 
          src="/Vector (5).png" 
          alt="Brand 6" 
          className="w-full h-full object-contain mr-10"
          width={120} 
          height={120} 
        />
      </div>
    </div>
  );
}
