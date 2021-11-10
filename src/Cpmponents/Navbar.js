import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar({ toggle, login }) {
  return (
    <ul>
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/UsersList">UserList</Link>
      </li>

      <li className="bt">
        <Button variant="outline-success" onClick={toggle}>
          {login ? "Logout" : "LogIn"}
        </Button>
      </li>
    </ul>
  );
}

export default Navbar;
