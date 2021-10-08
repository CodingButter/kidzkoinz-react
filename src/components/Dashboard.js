import { Container, Row, Col, Button } from "react-bootstrap";
const Dashboard = ({ user }) => {
  console.log(user);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Row>Dashboard</Row>
    </Container>
  );
};

export default Dashboard;
