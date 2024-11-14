import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  // const onChangeEventHandler = (event) => {
  //   handleOnChange;
  //   console.log(event);
  //   console.log(`Typing...`);
  // };
  return (
    <input
      type="text"
      className={styles.foodInput}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
