import { useState } from "react";
import Cartbtn from "./Cartbtn";

export function FoodItemList({ food, counter, setCounter }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="foodItem-container">
      <img className="foodItem-poster" src={food.image} alt={food.name} />
      <div className="foodItem-spec">
        <h5>{food.name}</h5>
        <h5>{food.category}</h5>
      </div>
      <div className="select-style">
        {" "}
        <select value={varient} onChange={(e) => setVarient(e.target.value)}>
          {food.varients?.map((varient) => {
            return (
              <option key={varient.id} value={varient}>
                {varient}
              </option>
            );
          })}
        </select>
        <div className="card">
          <p className="card-subtitle">Quantity</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(5).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="card-footer-div">
        <div className="m-1 w-100">
          <div className="mt-1 cart-price">
            Price: Rs/-
            <span className="food-price">
              {food.prices[0][varient] * quantity}
            </span>
          </div>
        </div>
      </div>
      <Cartbtn food={food} counter={counter} setCounter={setCounter} />
    </div>
  );
}
