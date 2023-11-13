import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../assets/icons/header/logo.svg";
import basketSvg from "../../assets/icons/header/basket.svg";

import "./_index.scss";
import Search from "../search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Header: React.FC = () => {
  const { totalAmount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/">
          <img className="header__logo" src={logoSvg} alt="Pizza logo" />
        </Link>

        <div className="header__search search">
          <Search />
        </div>

        <Link to="/cart">
          <div className="header__basket basket">
            <div className="basket__order-price">
              {totalPrice.toFixed(1)}
              <span>р.</span>
            </div>
            <div className="basket__link-to-basket">
              <img src={basketSvg} alt="" className="basket__image" />
              <div className="basket__itemsCount">{totalAmount}</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};
