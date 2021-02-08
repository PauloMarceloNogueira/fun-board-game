import React, { useEffect, useState } from "react";
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
  const questions = [
    {
      position: 1,
      question: "Quanto é 2 + 2?",
      answer: "2",
    },
    {
      position: 2,
      question: "Quanto é 4 + 4?",
      answer: "8",
    },
    {
      position: 3,
      question: "Quanto é 6 + 6?",
      answer: "8",
    },
    {
      position: 4,
      question: "Quanto é 8 + 8?",
      answer: "8",
    },
    {
      position: 5,
      question: "Quanto é 14 + 4?",
      answer: "8",
    },
  ];
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showQuestion, setShowQuestion] = useState({
    show: false,
    question: {
      question: "",
      position: 1,
      answer: "",
    },
  });

  useEffect(() => {
    users.map((user) => {
      setCurrentPosition(user.position);
      console.log(currentPosition, "CURRENT");
      if (questions.find((q) => q.position === currentPosition)) {
        console.log("Tem pergunta");
        setShowQuestion({
          show: true,
          question: questions.find((q) => q.position === currentPosition) || {
            position: 1,
            question: "Quanto é 4 + 4?",
            answer: "8",
          },
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);
  const getUserPoint = (position: number) => {
    return users.map((user, key) => {
      // console.log(user.position, position);
      if (user.position === position) {
        return (
          <UserComponent
            id={user.id}
            turn={user.turn}
            userName={user.userName}
            position={user.position}
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
          {i}
        </Box>
      );
    } else {
      box.push(<Wall key={i} />);
    }
  }
  return (
    <div>
      {showQuestion && currentPosition > 0 && (
        <div>
          <h4>Pergunta:</h4>
          {showQuestion.question.question}
        </div>
      )}
      <Container imgUrl={imgUrl}>
        <button
          disabled={!users.find((u) => u.id === 0)?.turn}
          onClick={() => changePosition(0)}
        >
          Usuário 1
        </button>
        <GameBoard>{box}</GameBoard>
        <button
          disabled={!users.find((u) => u.id === 1)?.turn}
          onClick={() => changePosition(1)}
        >
          Usuário 2
        </button>
      </Container>
    </div>
  );
};
