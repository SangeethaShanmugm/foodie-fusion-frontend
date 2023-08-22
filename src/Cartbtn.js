import React, { useState } from "react";

function Cartbtn({ food, counter, setCounter }) {
  const [toggle, setToggle] = useState(false);
  let [cartCount, setCartCount] = useState(0);
  let [buttonText, setButtonText] = useState("");
  //   const handleAddtoCart = () => {
  //     const cartItem = {
  //       name: food.name,
  //       image: food.image,
  //       varient: food.varients,
  //       quantity: Number(quantity),
  //       prices: food.prices,
  //       price: food.prices[0][varient] * quantity,
  //     };
  //     setCartItem(cartItem);
  //   };

  const handleButton = (e) => {
    if (e === "Add to Cart") {
      setCartCount(cartCount + 1);
      setButtonText((buttonText = "Remove from Cart"));
    } else if (e === "Remove from Cart") {
      setCartCount(cartCount - 1);
      setButtonText((buttonText = "Add to Cart"));
    } else {
      setCartCount(cartCount);
      setButtonText((buttonText = e));
    }
  };

  return (
    <div className="m-1 w-100">
      <div className="button-borders">
        <button
          className="btn btn-success"
          onClick={handleButton}
          //   onClick={() => {
          //     setCounter(toggle ? counter - 1 : counter + 1);
          //     setToggle(!toggle);
          //   }}
        >
          Add to Cart
          {/* {toggle ? "Remove from Cart" : "Add to Cart"} */}
        </button>
      </div>
    </div>
  );
}

export default Cartbtn;
