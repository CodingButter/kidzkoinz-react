import { Container, Row, Col, Button } from "react-bootstrap";
import Avatar from "react-avatar";
import { useQuery, gql } from "@apollo/client";

const getProfileQuery = gql`
  query getProfilesForHousehold($householdId: Int!) {
    household(id: $householdId) {
      parents {
        firstname
        avatar {
          image {
            medium
          }
        }
      }
      children {
        firstname
        avatar {
          image {
            medium
          }
        }
      }
    }
  }
`;

const Profiles = ({ householdId, setUserSelected }) => {
  const { loading, error, data } = useQuery(getProfileQuery, {
    variables: { householdId: householdId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

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
        {data.household.parents.map((user) => {
          return (
            <Col>
              <Button variant="light" onClick={() => setUserSelected(user)}>
                <Avatar name={user.firstname} />
                <h3>{user.firstname}</h3>
              </Button>
            </Col>
          );
        })}
        {data.household.children.map((user) => {
          return (
            <Col>
              <Button variant="light" onClick={() => setUserSelected(user)}>
                <Avatar name={user.firstname} />
                <h3>{user.firstname}</h3>
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export { Profiles, getProfileQuery };
