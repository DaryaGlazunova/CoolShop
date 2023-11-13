import React from "react";
import { Link } from "react-router-dom";
import "./_index.scss";

const OrderIsProcessed: React.FC = () => {
  return (
    <div className="order">
      <h1>Заказ успешно оформлен.</h1>
      <Link className="back-to-shop" to="/">
        Вернуться к выбору товаров
      </Link>
    </div>
  );
};

export default OrderIsProcessed;
