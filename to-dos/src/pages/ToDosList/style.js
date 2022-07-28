import styled from "styled-components";

export const StyledToDosList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100vw;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

  #title-todo {
    margin: 20px 0px;
    padding: 20px 30px;
    background-color: var(--grey-8);
    width: 100vw;
  }

  #to-dos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
  }

  @media (min-width: 667px) {
    #to-dos {
      flex-direction: row;
    }

    h2 {
      flex-direction: row;
    }
  }
`;
