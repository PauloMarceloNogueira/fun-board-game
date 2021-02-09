import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Avatars } from "../../Assets/base64/avatars";
import Buttons from "../../Components/Buttons/Buttons.component";
import { TypesUser, useUser } from "../../State";
import { Container } from "./Start.styles";
export const Start: React.FC = () => {
  const history = useHistory();

  const [stateUser, dispathUser] = useUser();
  const setImage = (avatar: string, id: number) => {
    dispathUser({
      type: TypesUser.setAvatar,
      payload: {
        avatar,
        id,
      },
    });
    history.push("/game");
  };
  console.log(stateUser, "stateUser");
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Bem vindo!</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50%",
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Container>
          {/* <input placeholder="Nome jogador nº 1" /> */}
          <div>
            {Object.values(Avatars).map((av: any) => {
              return (
                <Buttons handleClick={() => setImage(av.image, 0)} type="Ghost">
                  <img
                    src={av.image || ""}
                    style={{ width: 72, height: 72 }}
                    alt="avatar"
                  />
                </Buttons>
              );
            })}
          </div>
        </Container>
        <Link
          to="/game"
          style={{
            backgroundColor: "#F6D056",
            textDecoration: "none",
            borderRadius: 8,
            padding: 8,
            color: "#454962",
            fontWeight: "bold",
          }}
        >
          Iniciar
        </Link>
        {/* <Container>
          
          <div>
            {Object.values(Avatars).map((av: any) => {
              return (
                <Buttons handleClick={() => setImage(av.image, 1)} type="Ghost">
                  <img
                    src={av.image || ""}
                    style={{ width: 72, height: 72 }}
                    alt="avatar"
                  />
                </Buttons>
              );
            })}
          </div>
        </Container> */}
      </div>
    </div>
  );
};
