import { StyledHeader } from "../Header/style";
import Button from "../Button";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <StyledHeader>
      <span id="title">
        <h2>TO DOs</h2>
        <h4>List</h4>
      </span>

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
    </StyledHeader>
  );
}
