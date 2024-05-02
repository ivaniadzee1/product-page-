import  { useState } from "react";

const Product = () => {
    const [showNum, setShowNum] = useState(1);

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='relative w-[375px] h-[375px] mt-[30px]'>
                <button className='absolute top-[50%] right-[5px] transform -translate-y-1/2 text-3xl bg-black z-20 text-white rounded-full w-10 h-10 lg:mt-[20px]' onClick={() => {
                    if (showNum === 4) {
                        setShowNum(1) 
                    } else {
                        setShowNum(showNum + 1)
                    }
                }}>&#10095;</button>

                {showNum === 1 && <img className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl lg:w-[450px] lg:h-[450px] lg:mt-[-30px]" src="/assets/n1.jpg" alt="" />}
                {showNum === 2 && <img className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl lg:w-[450px] lg:h-[450px] lg:mt-[-30px]" src="/assets/n2.jpg" alt="" />}
                {showNum === 3 && <img className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl lg:w-[450px] lg:h-[450px] lg:mt-[-30px]" src="/assets/n3.jpg" alt="" />}
                {showNum === 4 && <img className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl lg:w-[450px]  lg:h-[450px] lg:mt-[-30px]" src="/assets/n4.jpg" alt="" />}

                <button className='absolute top-[50%] left-[6px] transform -translate-y-1/2 text-3xl bg-black text-white rounded-full w-10 h-10 lg:mt-[20px]' onClick={() => {
                    if (showNum === 0) {
                        setShowNum(4)
                    } else {
                        setShowNum(showNum - 1)
                    }
                }}>&#10094;</button>
            </div>
        </div>
    );
}

export default Product;
