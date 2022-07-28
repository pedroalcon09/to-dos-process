import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-family: Ubuntu, sans-seriff;
  background-color: var(--grey-0);
  width: 100%;

  h2,
  h4,
  h6 {
    color: var(--white);
    margin: 10px 5px;
  }

  #title {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (min-width: 667px) {
    flex-direction: row;
    padding: 15px 0px;

    h2 {
      font-size: 30px;
    }
    h4 {
      font-size: 25px;
    }
    h6 {
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    padding: 25px 0px;

    h2 {
      font-size: 40px;
    }
    h4 {
      font-size: 35px;
    }
    h6 {
      font-size: 20px;
    }
  }
`;
