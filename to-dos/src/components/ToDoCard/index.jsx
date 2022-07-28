import { StyledToDoCard } from "./style";
import Button from "../Button";
import api from "../../services/api";
import { toast } from "react-toastify";

function ToDoCard({ toDo }) {
  const { title, status, id } = toDo;

  function concludeTask() {
    api
      .patch(`/todos/${id}/`, { status: "concluído" })
      .then((_) => {
        toast.success("Tarefa concluída!");
      })
      .catch((_) => {
        toast.error("Opa, algo deu errado, tente novamente ...");
      });
  }

  function taskPending() {
    api
      .put(`/todos/${id}`, { status: "pendente" })
      .then((_) => {
        toast.success("Tarefa pendente!");
      })
      .catch((_) => {
        toast.error("Opa, algo deu errado, tente novamente ...");
      });
  }

  return (
    <StyledToDoCard id={id}>
      <h3>{title}</h3>
      <p>{status}</p>

      <div id="change-status">
        {status === "pendente" ? (
          <Button
            class="concluido"
            width="75px"
            color="var(--success)"
            textColor="var(--white)"
            borderColor="var(--white)"
            height="75px"
            borderRadius="50%"
            onClick={() => concludeTask()}
          >
            Concluído
          </Button>
        ) : (
          <Button
            id="pendente"
            width="75px"
            color="var(--error)"
            textColor="var(--white)"
            borderColor="var(--white)"
            height="75px"
            borderRadius="50px"
            onClick={() => taskPending()}
          >
            Pendente
          </Button>
        )}
      </div>
    </StyledToDoCard>
  );
}

export default ToDoCard;
