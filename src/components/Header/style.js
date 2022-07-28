import styled, { keyframes } from "styled-components";

export const PopUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3)
  }

  60% {
    opacity: 0.75;
    transform: scale(1.05)
  }

  90% {
    opacity: 1;
    transform: scale(1.0)
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100vw;
  background-color: var(--grey-3);

  #title {
    display: flex;
    align-items: center;
    justify-content: space-around;

    h2,
    h4 {
      margin: 0px 3px;
    }
  }

  button {
    transform: scale(0.75);
  }

  @media (min-width: 667px) {
    h2 {
      font-size: 30px;
    }

    h4 {
      font-size: 25px;
    }
    button {
      transform: scale(0.75);
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 40px;
    }

    h4 {
      font-size: 30px;
    }

    button {
      transform: scale(1);

      :hover {
        transform: scale(1.15);
      }
    }
  }
`;
