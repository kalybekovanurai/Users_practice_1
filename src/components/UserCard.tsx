import type { Users } from "../constants";
import Button from "./UI/Button";
import "./users.css";

interface UserProps {
  user: Users;
}

const UserCard = ({ user }: UserProps) => {
  const { firstName, email, gender, carModel, image, id } = user;

  const handleClickById = () => alert("Id: " + id);

  return (
    <div className="user-card">
      <img src={image} alt={firstName} />

      <h1>{firstName}</h1>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{carModel}</p>

      <Button text="Показать id" onClick={handleClickById} />
    </div>
  );
};

export default UserCard;
