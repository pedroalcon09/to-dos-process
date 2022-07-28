import styled from "styled-components";

export const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;

  #user-title {
    margin: 20px 0px;
    padding: 20px 30px;
    background-color: var(--grey-8);
    width: 100vw;
  }

  @media (min-width: 667px) {
    #users {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1024px) {
    main {
      height: 80vh;
    }

    #user-title {
      font-size: 40px;
    }
  }
`;
