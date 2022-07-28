import styled from "styled-components";

export const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 667px) {
    #users {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
