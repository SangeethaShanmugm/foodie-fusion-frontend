import { useState, useEffect } from "react";
import { API } from "./global";
import { FoodItemList } from "./FoodItemList";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
export function Home() {
  const [foodItemList, setFoodItemList] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    fetch(`${API}/foodItems/getAllfoodItems`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setFoodItemList(data));
  }, []);

  console.log("foodItemList", foodItemList);
  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        <AiOutlineShoppingCart style={{ fontSize: "50px" }} />
        <Badge bg="secondary">{counter}</Badge>
      </Button>

      <div className="foodItemList-container">
        {foodItemList.map((foodItem) => (
          <FoodItemList key={foodItem.id} food={foodItem} />
        ))}
      </div>
    </div>
  );
}
