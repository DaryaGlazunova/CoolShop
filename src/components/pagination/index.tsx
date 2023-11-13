import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  perPage: number;
  totalProducts: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  perPage,
  onChangePage,
  totalProducts,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalProducts / perPage);

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
