import { StyledToDosList } from "./style";
import ToDoCard from "../../components/ToDoCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Button from "../../components/Button";

export default function ToDosList() {
  const { user_id } = useParams();

  const [user, setUser] = useState({});

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/users/${user_id}`)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    api
      .get(`/toDos?userId=${user_id}`)
      .then((resp) => {
        setToDos(resp.data);
      })
      .catch((err) => console.log(err));
  }, [toDos]);

  return (
    <StyledToDosList>
      <Header />
      <h2 id="title-todo">
        To Dos from {user.name}
        <Button
          width="80px"
          color="var(--grey-1)"
          textColor="var(--white)"
          borderColor="var(--white)"
          height="80px"
          borderRadius="100%"
          onClick={() => history.push(`/users/${user_id}/toDos/new/`)}
          fontSize="15px"
        >
          Adicionar tarefa
        </Button>
      </h2>

      <ul id="to-dos">
        {toDos.map((todo) => {
          return <ToDoCard key={todo.id} toDo={todo} />;
        })}
      </ul>
      <Footer />
    </StyledToDosList>
  );
}
