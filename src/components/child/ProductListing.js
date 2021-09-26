import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import koinzImg from "../../static/koinz.png";
const ProductListing = () => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Card
      onClick={() => setZoomed(!zoomed)}
      style={{
        width: zoomed ? "40rem" : "18rem",
        margin: "1rem",
        border: "none",
        transition: "width 2s, height 2s"
      }}
    >
      <Card.Img
        variant="top"
        src="https://m.media-amazon.com/images/I/8179Qxn40PL._AC_SL1500_.jpg"
      />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Toy Car</Card.Title>
          </Col>
          <Col>
            <Card.Title style={{ color: "#F5CC48" }}>
              260{" "}
              <Card.Img
                style={{ height: "1.3em", width: "1.3em" }}
                src={koinzImg}
              />
            </Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductListing;
