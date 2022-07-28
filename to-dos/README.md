# TO DOs List

### Tecnologias utilizadas

> json-server

> axios

> react-router-dom@5

> react-hook-form

> yup

> react-toastify

> styled-components

> react-icons

### Páginas

| Rotas                     | Página                    |
| ------------------------- | ------------------------- |
| /                         | Listar usuários           |
| /newUser                  | Criar usuário (MODAL)     |
| /users/:user_id/          | Lista TO DOs do usuário   |
| /users/:user_id/toDos/new | Criar nova tarefa (MODAL) |

### Rotas de requisição

| Rotas                       | VERBO HTTP | Ação                     |
| --------------------------- | ---------- | ------------------------ |
| /user/repo/users/           | POST       | Adicionar novo usuário   |
| /user/repo/toDos/           | POST       | Adicionar nova tarefa    |
| /user/repo/toDos/:toDos_id/ | PATCH      | Alterar status da tarefa |

### Componentes

> InputField
> Button
> ToDoCard
> UserCard
> Header
> Footer
