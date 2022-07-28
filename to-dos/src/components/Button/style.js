import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  transition: 0.5s;
  font-family: Inter, sans-seriff;
  font-weight: 500;
  cursor: pointer;
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-family: Ubuntu, sans-seriff;

  :hover {
    transform: scale(1.1);
    font-weight: 900;
    box-shadow: -1px 4px 33px 11px #000000;
  }
`;
