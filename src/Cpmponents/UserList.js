import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import UserCard from "./UserCard";

function UsersList({ login }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((ereur) => console.log(ereur));
  }, []);

  return (
    <>
      {login ? (
        <div className="list">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default UsersList;
