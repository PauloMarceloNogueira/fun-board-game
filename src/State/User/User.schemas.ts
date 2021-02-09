import { ActionMap } from "../Config.store";

export type UserStateProps = {
  name: string;
  position: number;
  id: number;
  avatar: string;
}[];

export const UserState: UserStateProps = [
  {
    avatar: "",
    position: 0,
    id: 0,
    name: "",
  },
];

export enum Types {
  changePosition = "CHANGE_POSITION",
  setName = "SET_NAME",
  setAvatar = "SET_AVATAR",
}

export type userPayload = {
  [Types.changePosition]: {
    position: number;
    id: number;
  };
  [Types.setAvatar]: {
    id: number;
    avatar: string;
  };
  [Types.setName]: {
    id: number;
    name: string;
  };
};

export type UserAction = ActionMap<userPayload>[keyof ActionMap<userPayload>];
