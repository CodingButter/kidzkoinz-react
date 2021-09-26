import React from "react";

import { ProductListing } from "../components/child/ProductListing";

export default {
  title: "Child/ProductListing",
  component: ProductListing,
};

const Template = (args) => <ProductListing {...args} />;

ProductListing.args = {
  title: 'Toy Car',
  koinz: '260',
  image: 'https://m.media-amazon.com/images/I/8179Qxn40PL._AC_SL1500_.jpg'
};

export const Main = Template.bind({});
