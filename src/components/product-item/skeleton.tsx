import React from "react";
import ContentLoader from "react-content-loader";

const ProductItemSkeleton = () => (
  <ContentLoader
    speed={2}
    className="Product-item"
    width="100%"
    height="100%"
    viewBox="0 0 292 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
  </ContentLoader>
);

export default ProductItemSkeleton;
