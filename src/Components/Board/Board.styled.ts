import styled from "styled-components";

export const Container = styled.div<{ imgUrl: string }>`
  background-color: #a5dad2;
  // background: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px;
  grid-template-rows: 80px 80px 80px 80px 80px 80px 80px;
  justify-content: flex-start;
`;

export const Box = styled.div<{ finish: boolean; start: boolean }>`
  border: 2px solid yellow;
  background-color: ${(props) =>
    props.finish || props.start ? "yellow" : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  border-radius: ${(props) => (props.finish || props.start ? "50%" : "none")};
`;

export const Wall = styled.div`
  background-color: #a5dad2;
`;
