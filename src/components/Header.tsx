import { useState } from "react";

const Header = ({ totalPrice }: any) => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    };

    const closeBurgerMenu = () => {
        setBurgerMenu(false);
    };

    const toggleShowPrice = () => {
        setShowPrice(!showPrice);
    };

    const CheckOut =() => {
        setShowPrice(false)
    }

    return (
        <div>
            <div>
                <div className="flex justify-between items-center relative md:hidden">
                    {burgerMenu && (
                        <div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-50"
                            onClick={closeBurgerMenu}
                            
                        ></div>
                    )}
                    <div className="flex pl-4 pt-4">
                        <button onClick={toggleBurgerMenu}>
                        <img src="/assets/lines.svg" alt="" />
                        </button>
                        {burgerMenu && (
                            <div className="bg-white h-screen w-56 fixed top-0 left-0 z-50 overflow-y-auto transition-all duration-600">
                                <img
                                    className="absolute top-[40px] left-[15px] cursor-pointer"
                                    src="/assets/x.svg"
                                    onClick={closeBurgerMenu}
                                    alt=""
                                />
                                <ul className="py-4 mt-16">
                                    <li className="px-4 py-2 text-lg font-bold hover:bg-[#FF7E1B] cursor-pointer transition-colors duration-300">Collections</li>
                                    <li className="px-4 py-2 text-lg font-bold hover:bg-[#FF7E1B] cursor-pointer transition-colors duration-300">Men</li>
                                    <li className="px-4 py-2 text-lg font-bold hover:bg-[#FF7E1B] cursor-pointer transition-colors duration-300">Women</li>
                                    <li className="px-4 py-2 text-lg font-bold hover:bg-[#FF7E1B] cursor-pointer transition-colors duration-300">About</li>
                                    <li className="px-4 py-2 text-lg font-bold hover:bg-[#FF7E1B] cursor-pointer transition-colors duration-300">Contact</li>
                                </ul>
                            </div>
                        )}
                        <h1 className="pl-[20px] font-extrabold text-2xl">Sneakers</h1>
                    </div>
                    <div className="flex pt-[25px] pr-[30px]">
                    <button onClick={toggleShowPrice}>
    <img
        className="relative w-[40px] h-[40px] mt-[30px] right-[90px]"
        src="/assets/shop.svg"
        alt=""
    />
</button>

                        <img className="pl-[30px]" src="/assets/user1.svg" alt="" />
                    </div>
                </div>
                <div className="md:flex lg:justify-between hidden">
                    <div className="flex justify-center items-center text-center">
                        <h1 className="pl-[20px] pt-[40px] font-extrabold text-3xl">Sneakers</h1>
                        <ul className="py-4 mt-[46px] ml-[20px] flex">
                            <li className="px-4 py-2 text-lg font-bold opacity-60 cursor-pointer transition-colors duration-300">Collections</li>
                            <li className="px-4 py-2 text-lg font-bold opacity-60 cursor-pointer transition-colors duration-300">Men</li>
                            <li className="px-4 py-2 text-lg font-bold opacity-60 cursor-pointer transition-colors duration-300">Women</li>
                            <li className="px-4 py-2 text-lg font-bold opacity-60 cursor-pointer transition-colors duration-300">About</li>
                        </ul>
                    </div>
                    <div className="flex pt-[45px] pr-[30px]">
                        <div className="flex flex-col">
                            <button onClick={toggleShowPrice}>
                                <img className="relative w-[40px] h-[40px] mt-[30px] right-[90px]" src="/assets/shop.svg" alt="" />
                            </button>
                            <div className="flex justify-center items-center">

                            </div>
                        </div>
                        <img className="relative right-[70px]" src="/assets/user1.svg" alt="" />
                    </div>
                </div>

                <div className="md:w-11/12 md:mt-[10px] md:z-0 md:ml-[30px] md:h-[1px] md:bg-gray-300 ">
                    {showPrice && (
                        <div className="flex z-40 justify-center absolute right-[10px]">
                            <div className="w-[360px] h-[251px] bg-gray-100 rounded-2xl">
                                <h1 className="pl-[20px] mt-[20px] font-extrabold">Cart</h1>
                                <div className="w-[360px] h-[5px] mt-[10px] bg-white"></div>
                                <h1 className="opacity-60 pl-[20px] pt-[20px]">Fall Limited Edition Sneakers</h1>
                                <h1 className="opacity-60 pl-[20px] pt-[20px]">$ 125.00 x 3 <span className="font-extrabold">{totalPrice}$ PRICE</span></h1>
                                <button className="w-[312px] h-[56px] bg-[#FF7E1B] ml-[20px] mt-[25px] text-white rounded-xl " onClick={CheckOut}>Chechkout</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
}

export default Header;
