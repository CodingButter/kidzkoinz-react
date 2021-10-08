import React from "react";

import ParentStore from "./ParentStore";

export default {
  component: ParentStore,
  title: "Parent/Store",
};

const storeProducts = [
  {
    image: "https://m.media-amazon.com/images/I/8179Qxn40PL._AC_SL1500_.jpg",
    description: "a cool toy",
    koinz: "50",
    price: "$5.50",
    amazonPrime: "true",
  },
];
export const Main = () => <ParentStore storeProducts={storeProducts} />;
