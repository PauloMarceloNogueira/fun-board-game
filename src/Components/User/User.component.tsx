import React from "react";
import { Container } from "./User.styled";
export interface UserI {
  position: number;
  userName: string;
}
export const UserComponent: React.FC<UserI> = ({ userName, position }) => {
  return <Container>{userName}</Container>;
};
