import styled from "styled-components";

export const Button = styled.button<{ background: string; border: boolean }>`
  background-color: ${(props) => props.background};
  border: ${(props) => (props.border ? "1px" : "none")};
  cursor: pointer;
  outline: none;
  text-decoration: "none";
  border-radius: 16px;
  padding: 8px;
  color: "#454962";
  font-weight: "bold";
`;
