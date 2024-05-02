import React, { useState } from "react";

interface PriceProps {
    updateTotalPrice: (price: number) => void;
}

const Price: React.FC<PriceProps> = ({ updateTotalPrice }) => {
    const [counter, setCounter] = useState(0);
    const [, setTotalPrice] = useState(0);

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

 
     

      const a ="nika"
      const b= "kaxa"
      console.log( a +b)

    const calculateTotalPrice = () => {
        const price = counter * 125;
        setTotalPrice(price);
        updateTotalPrice(price);
    };

    const handleAddToCart = () => {
        calculateTotalPrice();
    };

    return (
        <div>
            <div className="flex justify-center flex-col text-center items-center mt-[-180px] h-screen">
                <div className="flex justify-center flex-col text-left items-center ml-[15px]">
                    <h1 className="#FF7E1B text-lg font-semibold ml-[-220px] text-[#FF7E1B]">Sneaker Company</h1>
                    <h2 className="w-[327px] pt-[20px] h-[64px] ml-[-37px] text-2xl font-extrabold">Fall Limited Edition Sneakers</h2>
                    <h2 className="flex justify-center ml-[-35px] w-[327px] flex-col text-left  items-center opacity-60 pt-[30px]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</h2>
                </div>
                <div className="flex">
                    <h1 className="font-extrabold text-left text-2xl ml-[-170px] mt-[30px]">125$</h1>
                    <button className="w-[50px] h-[26px] ml-[35px] mt-[32px] bg-[#FFEEE2] text-[#FF7E1B] rounded-xl">50%</button>
                </div>
            </div>
            <div className="flex justify-center flex-col text-center items-center ml-[-50px]">
                <div className="flex ml-[30px] w-[327px] mt-[-180px] h-[56px] bg-[#e7ecfa] rounded-lg">
                    <button onClick={decrement} className="text-2xl font-extrabold text-[#FF7E1B] pl-[40px]">&#9866;</button>
                    <p className="text-xl font-extrabold pl-[100px] pt-[15px]">{counter}</p>
                    <button onClick={increment} className="text-2xl font-extrabold text-[#FF7E1B] pl-[90px]">&#10011;</button>
                </div>
                <button onClick={handleAddToCart} className="w-[327px] h-[56px] bg-[#FF7E1B] rounded-lg mt-[20px] ml-[25px] pl-[100px]"><img src="/assets/shop2.svg" alt="" /></button>
            </div>
        </div>
    );
}

export default Price;