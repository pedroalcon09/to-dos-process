import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-family: Inter, sans-seriff;
  background-color: var(--grey-0);
  width: 100%;
  height: 75px;

  h2,
  h4,
  h6 {
    color: var(--white);
  }

  @media (min-width: 667px) {
    flex-direction: row;
  }
`;
