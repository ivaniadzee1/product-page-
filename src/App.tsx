import  { useState } from "react";
import Header from "./components/Header";
import Price from "./components/Price";
import Product from "./components/Product";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(price);
  };

  return (
    <div>
      <Header totalPrice={totalPrice} />
      <br />
      <div className="lg:flex lg:justify-center  lg:items-center lg:pr-[350px]">
        <Product/>
        <Price updateTotalPrice={updateTotalPrice} />
      </div>
    </div>
  );
}

export default App;
