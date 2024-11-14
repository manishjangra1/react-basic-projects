import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // foodItems = [
  //   "Dal",
  //   "Roti",
  //   "Green Vegetables",
  //   "Milk",
  //   "Salaaaaaaaad",
  //   "Ghee",
  // ];

  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Roti",
    "Green Vegetables",
    "Milk",
    "Salaaaaaaaad",
    "Ghee",
  ]);
  let [textToShow, setTextToShow] = useState();

  const handleOnKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="title">Healty Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
      <p>
        Above is the list of healthy foods that are good for your health and well being.
      </p>
    </Container> */}
    </>
  );
}

export default App;
