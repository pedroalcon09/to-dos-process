import styled, { keyframes } from "styled-components";

export const AppearFromAbove = keyframes`
  from {
    opacity: 0;
    transform: translateY(-75px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledModalAddToDo = styled.div`
  animation: ${AppearFromAbove} 1s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 60%;
  height: 300px;
  background-color: var(--grey-1);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 17px 20px rgba(255, 255, 255, 0.46);

  #modal-form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    color: var(--white);
  }

  #modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: var(--white);
    }
  }

  @media (min-width: 667px) {
    width: 40%;
    height: 400px;
  }
`;
