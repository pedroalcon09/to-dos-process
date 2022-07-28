import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  margin: 20px 0px;

  input {
    width: ${(props) => props.width};
    height: 30px;
    margin: 10px 0px;
  }

  label {
    font-weight: 900;
    font-size: 16px;
    margin: 5px;
  }

  .error {
    font-weight: 900;
    color: red;
    margin: 5px;
    font-size: 13px;
  }

  @media (min-width: 667px) {
    label {
      font-size: 27px;
    }

    input {
      transform: scale(1.3);
      margin: 15px 0px;
    }

    .error {
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    margin: 50px 0px;

    label {
      font-size: 40px;
    }

    input {
      transform: scale(2);
      margin: 25px 0px;
    }

    .error {
      font-size: 23px;
    }
  }
`;
