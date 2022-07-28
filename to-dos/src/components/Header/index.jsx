import { StyledHeader } from "../Header/style";
import Button from "../Button";
import { AiOutlineUserAdd, AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <StyledHeader>
      <span>
        <h2>TO DOs</h2>
        <h4>List</h4>
      </span>

      <div id="buttons">
        <Button
          width="100px"
          color="var(--grey-1)"
          textColor="var(--white)"
          borderColor="var(--white)"
          height="100px"
          borderRadius="100%"
          onClick={() => history.push("/")}
          fontSize="20px"
        >
          <AiOutlineHome /> Return home
        </Button>
        <Button
          width="100px"
          color="var(--grey-1)"
          textColor="var(--white)"
          borderColor="var(--white)"
          height="100px"
          borderRadius="100%"
          fontSize="20px"
          onClick={() => history.push("/newUser")}
        >
          <AiOutlineUserAdd /> Add User
        </Button>
      </div>
    </StyledHeader>
  );
}
