import { Card, Button, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Col sm="12" md="6" className="my-3">
      <Card>
        <Card.Header className="p-4 d-flex justify-content-around align-items-center ">
          <Card.Text
            style={{
              width: "70px",
              height: "70px",
              fontSize: "1.5em",
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-success text-md"
          >
            {user.name[0]}
          </Card.Text>
          <ListGroup flush className="w-75">
            <ListGroupItem>{user.name}</ListGroupItem>
            <ListGroupItem>{user.email}</ListGroupItem>
            <Button className="px-0 bg-success" variant="success">
              <Link to={`/Profile/${user.id}`}>Go To Profile</Link>
            </Button>
          </ListGroup>
        </Card.Header>
      </Card>
    </Col>
  );
}
export default UserCard;
