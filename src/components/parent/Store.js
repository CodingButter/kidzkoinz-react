import { Container, Table } from "react-bootstrap";
import Avatar from "react-avatar";

const Store = ({ storeProducts }) => {

  const storeColumns = [
    "Image",
    "Description",
    "Koinz",
    "Price",
    "Amazon Prime",
  ];
  return (
    <Container fluid>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {storeColumns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {storeProducts.map((product, index) => (
            <tr>
              <td>{index}</td>
              <td key={index}>
                <img
                  style={{ height: "5em", width: "5em" }}
                  src={product.image}
                />
              </td>
              <td key={index}>{product.description}</td>
              <td key={index}>{product.koinz}</td>
              <td key={index}>{product.price}</td>
              <td key={index}>{product.amazonPrime}</td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
    </Container>
  );
};

export default Store;
