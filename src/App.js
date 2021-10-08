import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { Profiles } from "./components/Profiles";
import Dashboard from "./components/Dashboard";

function App() {
  const [userSelected, setUserSelected] = useState(null);

  if (userSelected == null) {
    return <Profiles householdId={1} setUserSelected={setUserSelected} />;
  } else {
    return <Dashboard user={userSelected} />;
  }
}

export default App;
