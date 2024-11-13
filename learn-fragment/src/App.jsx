import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = [];
  foodItems = [
    "Dal",
    "Roti",
    "Green Vegetables",
    "Milk",
    "Salaaaaaaaad",
    "Ghee",
  ];
  return (
    <>
      <h1 className="title">Healty Foods</h1>
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </>
  );
}

export default App;
