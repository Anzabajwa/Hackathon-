export default function ImageContainer() {
    return (
      <div className="w-full h-[150px] mx-auto flex justify-between items-center bg-gray-100 px-4 ">
        {/* Box 1 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center">
          <img src="/Vector.png" alt="Brand 1" className="w-full h-full object-contain mr-10 ml-8" />
        </div>
        {/* Box 2 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center">
          <img src="/Vector (1).png" alt="Brand 2" className="w-full h-full object-contain mr-10" />
        </div>
        {/* Box 3 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center">
          <img src="/Vector (2).png" alt="Brand 3" className="w-full h-full object-contain mr-10" />
        </div>
        {/* Box 4 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center">
          <img src="/Vector (3).png" alt="Brand 4" className="w-full h-full object-contain mr-10" />
        </div>
        {/* Box 5 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center mr-10">
          <img src="/Vector (4).png" alt="Brand 5" className="w-full h-full object-contain mr-10" />
        </div>
        {/* Box 6 */}
        <div className="w-[120px] h-[120px] flex justify-center items-center">
          <img src="/Vector (5).png" alt="Brand 6" className="w-full h-full object-contain mr-10" />
        </div>
      </div>
    );
  }
  