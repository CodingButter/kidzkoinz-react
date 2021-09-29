import React from "react";

import Profiles from "./Profiles";

export default {
  component: Profiles,
  title: "General/Profiles",
};
export const Main = () => (
  <Profiles
    users={[
      { name: "Tanner", avatar: "Tanner" },
      { name: "Jamie", avatar: "Jamie" },
      { name: "John", avatar: "John Doe" },
    ]}
  />
);
