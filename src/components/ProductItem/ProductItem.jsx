import { Button } from "../Button/Button";
import "./style.css";

export const ProductItem = ({ product, onAdd }) => {
  const handleAdd = () => {
    onAdd(product);
  };

  return (
    <div className="product">
      <div className="img" />
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className="add-btn" onClick={handleAdd}>
        Добавить в корзину
      </Button>
    </div>
  );
};
