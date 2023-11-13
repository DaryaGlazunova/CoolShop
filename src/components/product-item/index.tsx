import React from "react";

import { TItemToCart } from "../../types";

import "./_index.scss";
import { TProductItem } from "../../redux/products/types";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { addItem, minusItem, removeItem } from "../../redux/cart/cartSlice";

interface IProductProps {
  productData: TProductItem;
}

const ProductItem: React.FC<IProductProps> = ({ productData }) => {
  const { id, title, price, description, image, category } = {
    ...productData,
  };
  const selectProductsItem = (id: number) => (state: RootState) =>
    state.cart.itemsInCart.find((item) => item.id === id);

  const productItem = useSelector(selectProductsItem(id));
  const addedCount = productItem ? productItem.count : 0;

  const dispatch = useAppDispatch();

  const onClickAddButton = () => {
    const item: TItemToCart = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch(addItem(item));
  };

  const onClickRemoveButton = () => {
    if (addedCount > 1) {
      dispatch(minusItem(id));
    }
    if (addedCount === 1) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={image} alt="" />
      </div>
      <div className="product-item__title">{title}</div>
      <div className="product-item__description">{description}</div>
      <div className="product-item__category">{category}</div>
      <div className="product-item__footer">
        <div className="product-item__price">
          <span>{price}</span> руб.
        </div>
        <div className="product-item__amount-block">
          <button
            className="product-item__remove-button"
            onClick={onClickRemoveButton}
          >
            <span>-</span>
          </button>

          <span className="product-item__amount">{addedCount}</span>
          <button
            className="product-item__add-button"
            onClick={onClickAddButton}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
