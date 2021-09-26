import 'bootstrap/dist/css/bootstrap.min.css';

import ProductListing from "./components/child/ProductListing";
import {Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><ProductListing/></Col>
      </Row>
    </Container>
  );
}

export default App;
