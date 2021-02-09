import React from "react";
import { useUser } from "../../State";
import Buttons from "../Buttons/Buttons.component";
import { QuestionsComponent } from "../Questions/Questions.component";
import { UserComponent } from "../User/User.component";
import { GameBoard, Box, Container, Wall } from "./Board.styled";
const imgUrl = require("../../Assets/Images/board.jpg").default;
interface BoardInterface {
  changePosition(userId: number): any;
  available: number[];
  size: number;
}
export const BoardComponent: React.FC<BoardInterface> = ({
  changePosition,
  available,
  size,
}) => {
  const [userState] = useUser();
  const users = userState;
  let box = [];

  const getUserPoint = (position: number) => {
    return users.map((user): any => {
      if (user.position === position) {
        return (
          <UserComponent
            id={user.id}
            turn={false}
            userName={user.name}
            position={user.position}
            avatar={user.avatar}
          />
        );
      }
    });
  };

  for (let i = 0; i < size; i++) {
    if (available.includes(i)) {
      box.push(
        <Box key={i} finish={i + 1 === size} start={i === 0}>
          {getUserPoint(i)}
        </Box>
      );
    } else {
      box.push(<Wall key={i} />);
    }
  }
  return (
    <div>
      <Container imgUrl={imgUrl}>
        <div style={{ marginRight: 16 }}>
          <Buttons
            type="Primary"
            handleClick={() => {
              changePosition(0);
            }}
          >
            <h4>JOGAR</h4>
          </Buttons>
        </div>
        <GameBoard>{box}</GameBoard>
        <QuestionsComponent />
      </Container>
    </div>
  );
};
