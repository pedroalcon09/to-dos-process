import { StyledUsersList } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledUsersList>
      <Header />
      <main>
        <h2 id="user-title">Usuários</h2>
        <ul id="users">
          {users.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </ul>
      </main>
      <Footer />
    </StyledUsersList>
  );
}
