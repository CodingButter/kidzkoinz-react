import "bootstrap/dist/css/bootstrap.min.css";
import "../src/static/productListing.css";

import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+

export const parameters = {
  apolloClient: {
    MockedProvider,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
