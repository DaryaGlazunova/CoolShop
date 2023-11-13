import React from "react";
import { TItemToCart } from "../../types";
import { addItem, minusItem, removeItem } from "../../redux/cart/cartSlice";
import imagePlusSvg from "../../assets/icons/minus-plus/plus-circle.svg";
import imageMinusSvg from "../../assets/icons/minus-plus/minus-circle.svg";
import { useAppDispatch } from "../../redux/store";
import "./_cart-item.scss";
type typeCartItemProps = {
  itemData: TItemToCart;
};

const CartItem: React.FC<typeCartItemProps> = ({ itemData }) => {
  const dispatch = useAppDispatch();

  const onClickAddButton = () => {
    const item: TItemToCart = {
      id: itemData.id,
      title: itemData.title,
      price: itemData.price,
      image: itemData.image,
      count: 1,
    };

    dispatch(addItem(item));
  };

  const onClickMinusButton = () => {
    if (itemData.count > 1) {
      dispatch(minusItem(itemData.id));
    } else {
      dispatch(removeItem(itemData.id));
    }
  };

  const onClickRemoveButton = () => {
    dispatch(removeItem(itemData.id));
  };

  return (
    <li className="items-in-cart__item">
      <div className="items-in-cart__image">
        <img src={itemData.image} alt="" />
      </div>
      <div className="items-in-cart__text">
        <h3>{itemData.title}</h3>
      </div>
      <div className="items-in-cart__amount">
        <div
          className="items-in-cart__minus"
          onClick={() => onClickMinusButton()}
        >
          <img src={imageMinusSvg} alt="" />
        </div>
        <span>{itemData.count}</span>
        <div className="items-in-cart_plus" onClick={() => onClickAddButton()}>
          <img src={imagePlusSvg} alt="" />
        </div>
      </div>
      <div className="items-in-cart__price">
        <span>{itemData.price * itemData.count}</span> руб.
      </div>
      <div
        className="items-in-cart__remove-button"
        onClick={() => onClickRemoveButton()}
      >
        <button>X</button>
      </div>
    </li>
  );
};

export default CartItem;
