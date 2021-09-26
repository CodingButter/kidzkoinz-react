import "bootstrap/dist/css/bootstrap.min.css";

import ProductListing from "./components/child/ProductListing";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ProductListing
            title="Toy Car"
            koinz="260"
            image="https://m.media-amazon.com/images/I/8179Qxn40PL._AC_SL1500_.jpg"
            embedId="C9RPt0E0jG0"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
