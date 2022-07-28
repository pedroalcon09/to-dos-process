import styled from "styled-components";

export const StyledUserCard = styled.li`
  diplay: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: black;
  border: 1px solid transparent;
  border-radius: 7px;
  height: fit-content;
  font-size: 20px;
  padding: 20px;
  margin: 15px;
  transition: 0.5s;
  background-color: var(--grey-6);

  :hover {
    border-color: black;
    transform: scale(1.1);
  }

  img {
    width: 100px;
    heigth: 100px;
    border-radius: 100%;
    border: 1px solid black;
  }

  h3,
  h4 {
    margin: 10px 0px;
  }
`;
