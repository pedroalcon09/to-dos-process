import { Switch, Route } from "react-router-dom";
import UsersList from "../pages/UsersList";
import ToDosList from "../pages/ToDosList/";
import ModalAddToDo from "../pages/ModalAddToDo";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <UsersList />
      </Route>

      <Route exact path="/users/:user_id">
        <ToDosList />
      </Route>

      <Route exact path="/users/:user_id/toDos/new/">
        <ToDosList />
        <ModalAddToDo />
      </Route>
    </Switch>
  );
}
