import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100vw;
  background-color: var(--grey-3);

  #buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      transform: scale(0.75);
    }
  }

  @media (min-width: 667px) {
    #buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        transform: scale(0.75);
      }
    }
  }
`;
