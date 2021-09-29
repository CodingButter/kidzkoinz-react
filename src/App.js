import "bootstrap/dist/css/bootstrap.min.css";

import Profiles from "./components/Profiles";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Profiles
        users={[
          { name: "Tanner", avatar: "Tanner" },
          { name: "Jamie", avatar: "Jamie" },
          { name: "John", avatar: "John Doe" },
        ]}
      />
    </>
  );
}

export default App;
