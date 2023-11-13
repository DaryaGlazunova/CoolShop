import React from "react";
// import { Categories } from "../components/categories/categories";
// import { Sort } from "../components/sort/sort";
// import { Pagination } from "../components/pagination/pagination";
import ProductItem from "../../components/product-item";
import ProductItemSkeleton from "../../components/product-item/skeleton";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/products/asyncActions";
import { TProductItem } from "../../redux/products/types";

import "./_index.scss";
import { Categories } from "../../components/categories";
import {
  setCategory,
  setCurrentPage,
  setSort,
} from "../../redux/filter/filterSlice";
import { Sort } from "../../components/sort";
import { TSort } from "../../types";
import Pagination from "../../components/pagination";

const HomePage: React.FC = () => {
  const { items, status } = useSelector((state: RootState) => state.products);
  const { category, sort, currentPage, searchValue, perPage } = useSelector(
    (state: RootState) => state.filter
  );

  const dispatch = useAppDispatch();

  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const categoryName = category.toLowerCase();
    const search = searchValue;

    dispatch(
      fetchProducts({
        sortBy,
        order,
        categoryName,
        search,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getProducts();
  }, [category, sort.sortProperty, searchValue]);

  const onChangeCategory = React.useCallback(
    (categoryName: string) => {
      dispatch(setCategory(categoryName));
    },
    [category, sort.sortProperty, searchValue, currentPage]
  );

  const onChangeSortProperty = (sortObj: TSort) => {
    dispatch(setSort(sortObj));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const lastProductIndex = currentPage * perPage;
  const firstProductIndex = lastProductIndex - perPage;

  const currentFilm = items.slice(firstProductIndex, lastProductIndex);
  const products = currentFilm
    .filter((productData: TProductItem) => {
      return productData.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    })
    .map((productData: TProductItem) => (
      <ProductItem key={productData.id} productData={productData} />
    ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <ProductItemSkeleton key={index} />
  ));

  return (
    <div className="content__container container">
      <div className="content__top">
        <Categories value={category} onChangeCategory={onChangeCategory} />
        <Sort value={sort} onChangeSortProperty={onChangeSortProperty} />
      </div>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <br />
          <br />
          <p>
            Товары не найдены. <br /> На ферме ведутся технические работы.
            Приносим извинения за предоставленные неудобства
          </p>
        </div>
      ) : (
        <div className="content__body">
          {status === "loading" ? skeletons : products}
        </div>
      )}

      <div className="content__pagination">
        <Pagination
          perPage={perPage}
          totalProducts={items.length}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};

export default HomePage;
