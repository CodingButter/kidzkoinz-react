import { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import koinzImg from "../../static/koinz.png";
import YoutubeEmbed from "../utils/YoutubeEmbed";
import "../../static/productListing.css";

const ProductListing = ({ title, koinz, image, embedId }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Card
      className="product-listing-card"
      style={{
        width: zoomed ? "40rem" : "20rem",
        margin: "1rem",
        border: "none",
        transition: "width 2s, height 2s",
      }}
    >
      <Card.Header>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button variant="light">
              <svg
                style={{ transition: "width 2s, height 2s" }}
                xmlns="http://www.w3.org/2000/svg"
                width={zoomed ? "32" : "16"}
                height={zoomed ? "32" : "16"}
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <svg
                style={{ transition: "width 2s, height 2s" }}
                xmlns="http://www.w3.org/2000/svg"
                width={zoomed ? "32" : "16"}
                height={zoomed ? "32" : "16"}
                fill="currentColor"
                className="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <div onClick={() => setZoomed(!zoomed)}>
        <div className="img-overlay-wrap">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title
                style={{
                  fontSize: zoomed ? "2.5rem" : "1.25rem",
                  transition: "font-size 2s",
                }}
              >
                {title}
              </Card.Title>
            </Col>
            <Col>
              <Card.Title
                style={{
                  color: "#F5CC48",
                  fontSize: zoomed ? "2.5rem" : "1.25rem",
                  transition: "font-size 2s",
                }}
              >
                {koinz}{" "}
                {koinz && (
                  <Card.Img
                    style={{ height: "1.25em", width: "1.25em" }}
                    src={koinzImg}
                  />
                )}
              </Card.Title>
            </Col>
          </Row>
          {zoomed && <YoutubeEmbed embedId={embedId} />}
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProductListing;
