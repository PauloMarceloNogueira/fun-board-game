import { UserAction, UserStateProps, Types } from "./User.schemas";

export const userReducer = (
  state: UserStateProps,
  action: UserAction
): UserStateProps => {
  switch (action.type) {
    case Types.changePosition:
      return state.map((s) =>
        s.id === action.payload.id
          ? { ...s, position: action.payload.position }
          : s
      );
    case Types.setAvatar:
      return state.map((s) =>
        s.id === action.payload.id ? { ...s, avatar: action.payload.avatar } : s
      );
    case Types.setName:
      return state.map((s) =>
        s.id === action.payload.id ? { ...s, name: action.payload.name } : s
      );
    default:
      return state;
  }
};
