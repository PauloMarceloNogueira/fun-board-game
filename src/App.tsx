import React, { Fragment, useState } from "react";
import { BoardComponent } from "./Components/Board/Board.component";

export default function App() {
  const available = [
    0,
    1,
    2,
    3,
    4,
    9,
    14,
    13,
    12,
    11,
    10,
    15,
    20,
    21,
    26,
    31,
    32,
    33,
  ];
  const [finish, setFinish] = useState({ winnerName: "", finish: false });
  const [users, setUsers] = useState([
    {
      userName: "PM",
      position: 0,
      id: 0,
    },
    {
      userName: "FB",
      position: 0,
      id: 1,
    },
  ]);

  const restartGame = () => {
    // setUsers(users.map((user) => {...user, position: 0}))
    setUsers(
      users.map((user) => {
        return { ...user, position: 0 };
      })
    );
    setFinish({ winnerName: "", finish: false });
  };

  const handleChangePosition = (userId: number) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    let newPosition =
      available[available.indexOf(users[userId].position) + randomNumber];
    const lastElement = available[available.length - 1];

    if (newPosition === undefined) {
      newPosition = lastElement;
    }
    if (newPosition === lastElement) {
      setFinish({
        winnerName: users.find((user) => user.id === userId)?.userName || "",
        finish: true,
      });
    }
    const newUsers = users;
    newUsers[userId] = {
      ...newUsers[userId],
      position: newPosition,
    };
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, position: newPosition } : user
      )
    );
  };
  return (
    <div>
      {finish.finish && <h3>Parabéns {finish.winnerName}!</h3>}
      <BoardComponent
        users={users}
        changePosition={handleChangePosition}
        available={available}
        size={34}
      />
      <button onClick={restartGame} disabled={!finish.finish}>
        Restart
      </button>
    </div>
  );
}
