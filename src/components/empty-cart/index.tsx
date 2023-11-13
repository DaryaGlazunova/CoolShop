import React from "react";

import { Link } from "react-router-dom";

import "./_index.scss";

export const EmptyCart: React.FC = () => {
  return (
    <div className="empty-cart">
      <h1>Корзина пустая, добавьте в нее товары</h1>
      <Link className="back-to-shop" to="/Products">
        Вернуться к выбору товаров
      </Link>
    </div>
  );
};
