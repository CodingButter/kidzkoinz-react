import { Container, Row, Col, Button } from "react-bootstrap";
import Avatar from "react-avatar";

const Profiles = ({ users }) => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Row>
        {users.map((user) => {
          return (
            <Col>
              <Button variant="light">
                <Avatar name={user.avatar} />
                <h3>{user.name}</h3>
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Profiles;
