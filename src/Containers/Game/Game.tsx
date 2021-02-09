import React, { useState } from "react";

import { BoardComponent } from "../../Components/Board/Board.component";
import Buttons from "../../Components/Buttons/Buttons.component";
import { QuestionsComponent } from "../../Components/Questions/Questions.component";
import { AvailabeSteps } from "../../Constants/Board";
import { useUser } from "../../State";
import { Types } from "../../State/User/User.schemas";

export const Game: React.FC = () => {
  const [finish, setFinish] = useState({ winnerName: "", finish: false });
  const available = AvailabeSteps;

  const [userState, userDispath] = useUser();
  const users = userState;
  const handleChangePosition = (userId: number) => {
    // const randomNumber = Math.floor(Math.random() * 5) + 1;
    const randomNumber = 1;

    let newPosition =
      available[available.indexOf(users[userId].position) + randomNumber];
    const lastElement = available[available.length - 1];

    if (newPosition === undefined) {
      newPosition = lastElement;
    }
    if (newPosition === lastElement) {
      setFinish({
        winnerName: users.find((user) => user.id === userId)?.name || "",
        finish: true,
      });
    }
    userDispath({
      type: Types.changePosition,
      payload: {
        id: userId,
        position: newPosition,
      },
    });
  };
  const restartGame = () => {
    userDispath({
      type: Types.changePosition,
      payload: {
        id: 0,
        position: 0,
      },
    });
  };
  return (
    <div>
      {finish.finish && <h3>Parabéns {finish.winnerName}!</h3>}
      <BoardComponent
        changePosition={handleChangePosition}
        available={available}
        size={34}
      />
      <Buttons type="Primary" handleClick={restartGame}>
        Restart
      </Buttons>
    </div>
  );
};
