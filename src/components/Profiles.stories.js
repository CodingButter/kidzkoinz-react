import React from "react";

import { Profiles, getProfileQuery } from "./Profiles";

export default {
  component: Profiles,
  title: "General/Profiles",
};

const setUserSelected = () => {
  return null;
};

export const Main = () => (
  <Profiles householdId={1} setUserSelected={setUserSelected} />
);

Main.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: getProfileQuery,
          variables: { householdId: 1 },
        },
        result: {
          data: {
            household: {
              parents: [
                {
                  firstname: "jamie",
                  avatar: {
                    image: {
                      medium: "http://localhost:3080/images/avatars/man.png",
                    },
                  },
                },
              ],
              children: [
                {
                  firstname: "andrew",
                  avatar: {
                    image: {
                      medium: "http://localhost:3080/images/avatars/boy.png",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};
