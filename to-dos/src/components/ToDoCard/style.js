import styled from "styled-components";

export const StyledToDoCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid transparent;
  transition: 0.5s;
  margin: 15px;
  justify-content: space-around;
  background-color: var(--grey-6);
  width: 60%;
  height: 200px;

  :hover {
    border-color: black;
    transform: scale(1.05);
  }

  #change-status {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 667px) {
    width: 30%;
    height: 60vh;

    h3,
    p {
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    width: 35%;
    height: 60vh;

    h3,
    p {
      font-size: 45px;
    }
  }
`;
