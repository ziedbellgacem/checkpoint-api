import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams, Navigate } from "react-router";

function Profile({ login }) {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .then(() =>
        setTimeout(() => {
          setLoding(false);
        }, 5000)
      )
      .catch((eror) => console.log(eror));
  }, [userId]);

  return (
    <>
      {loading ? (
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
        </>
      ) : (
        <>
          {login ? (
            <Container>
              <Row className="d-flex justify-content-center align-items-center">
                <p
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "1.5em",
                  }}
                  className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-success text-md"
                >
                  {user.name[0]}
                </p>
                {/* check if the user and the user.name  is truthy  */}

                <h1 className="display-3 col">{user.name}</h1>
                {/* check if the user and the user.name  is truthy  */}

                <p className="lead text-center col">
                  {/* check if the user and the user.address  is truthy   */}
                  {user.email}
                  {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}
                </p>
              </Row>
            </Container>
          ) : (
            <Navigate to="/" />
          )}
        </>
      )}
    </>
  );
}
export default Profile;
