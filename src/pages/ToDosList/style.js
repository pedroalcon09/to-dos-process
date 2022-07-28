import styled from "styled-components";

export const StyledToDosList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100vw;
  min-height: 100vh;

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
    margin: 20px 0px 75px 0px;
  }

  @media (min-width: 667px) {
    #to-dos {
      flex-direction: row;
    }

    h2 {
      flex-direction: row;
    }

    #title-todo {
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    #title-todo {
      font-size: 40px;
    }
  }
`;
