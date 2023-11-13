import React from "react";
import { useSelector } from "react-redux";
import { EmptyCart } from "../../components/empty-cart";
import { RootState, useAppDispatch } from "../../redux/store";
import CartItem from "../../components/cart-item/cart-item";
import basketSvg from "../../assets/icons/cart/basket.svg";
import trashSvg from "../../assets/icons/cart/trash.svg";
import { clearItems } from "../../redux/cart/cartSlice";

import "./_index.scss";
import OrderIsProcessed from "../../components/order-is-processed";

export const CartPage: React.FC = () => {
  const itemsInCart = useSelector((state: RootState) => state.cart.itemsInCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [orderIsProcessed, setOrderIsProcessed] = React.useState(false);
  const dispatch = useAppDispatch();

  const onClickClearCart = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  const onClickMakeOrder = () => {
    if (window.confirm("Сделать заказ?")) {
      setOrderIsProcessed(true);
      dispatch(clearItems());
    }
  };

  return (
    <div className="cart">
      {orderIsProcessed ? (
        <OrderIsProcessed />
      ) : !itemsInCart.length ? (
        <EmptyCart />
      ) : (
        <div className="cart__container container">
          <div className="cart__top">
            <div className="cart__title">
              <img src={basketSvg} alt="" />
              <h2>Корзина</h2>
            </div>
            <div className="cart__empty-cart" onClick={onClickClearCart}>
              <img src={trashSvg} alt="" />
              <p>Очистить корзину</p>
            </div>
          </div>
          <div className="cart__body">
            <div className="items-in-cart">
              <ul>
                {itemsInCart
                  .filter((item) => item.count > 0)
                  .map((item) => (
                    <CartItem key={item.id} itemData={item} />
                  ))}
              </ul>
            </div>
          </div>
          <div className="cart_bottom">
            <div className="cart__total-amount">
              Итого товаров на сумму: <span>{totalPrice}</span> руб.
            </div>
            <div className="cart__make-order-btn" onClick={onClickMakeOrder}>
              Заказать
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
