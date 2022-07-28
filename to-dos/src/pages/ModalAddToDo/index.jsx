import { StyledModalAddToDo } from "./style";
import { useHistory, useParams } from "react-router-dom";
import { Background } from "./style";
import Button from "../../components/Button";
import Input from "../../components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function ModalAddToDo() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    api
      .get(`/toDos`)
      .then((resp) => {
        setToDos(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const history = useHistory();

  const { user_id } = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Titulo necessário!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function getMaxId(arr) {
    let max_id = 0;
    arr.forEach((elem) => {
      if (max_id < elem.id) {
        max_id = elem.id;
      }
    });
    return max_id;
  }

  function addToDo({ title }) {
    const new_id = getMaxId(toDos);

    const newToDo = {
      id: new_id + 1,
      title: title,
      status: "pendente",
      userId: user_id,
    };

    api
      .post(`/toDos`, newToDo)
      .then((resp) => {
        toast.success("Tarefa adicionada!");
        history.push(`/users/${user_id}/`);
      })
      .catch((err) => {
        toast.error("Opa, algo deu errado, tente novamente ...");
        console.error(err);
      });
  }
  return (
    <Background>
      <StyledModalAddToDo>
        <div id="modal-header">
          <h2>Adicionar tarefa</h2>
          <Button
            color="var(--error)"
            textColor="var(--white)"
            borderColor="var(--white)"
            height="30px"
            borderRadius="100%"
            type="submit"
            fontSize="13px"
            onClick={() => history.push(`/users/${user_id}/`)}
          >
            X
          </Button>
        </div>

        <form id="modal-form" onSubmit={handleSubmit(addToDo)}>
          <Input
            type="text"
            name="title"
            label="Título"
            register={register}
            yupMessage={errors.title?.message}
            placeholder="Título"
            width="125px;"
          />
          <Button
            width="50px"
            color="var(--grey-1)"
            textColor="var(--white)"
            borderColor="var(--white)"
            height="50px"
            borderRadius="100%"
            type="submit"
            fontSize="13px"
          >
            Criar
          </Button>
        </form>
      </StyledModalAddToDo>
    </Background>
  );
}
