import React from "react";
import { UserComponent, UserI } from "../User/User.component";
import { GameBoard, Box, Container, Wall } from "./Board.styled";
const imgUrl = require("../../Assets/Images/board.jpg").default;
interface BoardInterface {
  users: UserI[];
  changePosition(userId: number): any;
  available: number[];
  size: number;
}
export const BoardComponent: React.FC<BoardInterface> = ({
  users,
  changePosition,
  available,
  size,
}) => {
  let box = [];

  const getUserPoint = (position: number) => {
    return users.map((user, key) => {
      // console.log(user.position, position);
      if (user.position === position) {
        return (
          <UserComponent userName={user.userName} position={user.position} />
        );
      }
    });
  };

  for (let i = 0; i < size; i++) {
    if (available.includes(i)) {
      box.push(
        <Box key={i} finish={i + 1 === size} start={i === 0}>
          {getUserPoint(i)}
          {i}
        </Box>
      );
    } else {
      box.push(<Wall key={i} />);
    }
  }
  return (
    <Container imgUrl={imgUrl}>
      <button onClick={() => changePosition(0)}>Usuário 1</button>
      <GameBoard>{box}</GameBoard>
      <button onClick={() => changePosition(1)}>Usuário 2</button>
    </Container>
  );
};
