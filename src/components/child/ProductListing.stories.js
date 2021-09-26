import React from "react";

import ProductListing from "./ProductListing";


export default {
  component: ProductListing,
  title: "Child/ProductListing",
};
export const Main = () => (
  <ProductListing
    title="Toy Car"
    koinz="260"
    image="https://m.media-amazon.com/images/I/8179Qxn40PL._AC_SL1500_.jpg"
    embedId="C9RPt0E0jG0"
  />
);
