import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  margin-top: 30px;

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
`;
