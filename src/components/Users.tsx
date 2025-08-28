import { USERS } from "../constants";
import UserCard from "./UserCard";
import "./users.css";

const Users = () => (
  <div className="container">
    <h1>Users</h1>

    <div className="users-container">
      {USERS.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);

export default Users;
