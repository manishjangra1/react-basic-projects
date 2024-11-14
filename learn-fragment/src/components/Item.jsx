import styles from './Item.module.css'

const Item = ({foodItem}) => {
  const handleByButtonClicked = (foodItem)=>{
    console.log(`${foodItem} is bought`)
  }
  return (
    <li className={`${styles['md-item']} list-group-item`}>
      {foodItem}
      <button className={`${styles.button} btn btn-info`}
      onClick={()=> handleByButtonClicked(foodItem)}>Buy</button>
    </li>
  );
};

export default Item;
