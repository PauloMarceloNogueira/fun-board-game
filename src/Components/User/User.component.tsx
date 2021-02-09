import React from "react";

import { Container, Avatar } from "./User.styled";

export interface UserI {
  position: number;
  userName: string;
  turn: boolean;
  id: number;
  avatar?: string;
}
export const UserComponent: React.FC<UserI> = ({ avatar }) => {
  return (
    <Container>
      <Avatar src={avatar} />
    </Container>
  );
};
