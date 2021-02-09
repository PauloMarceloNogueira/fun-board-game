import React, { createContext, Dispatch, useReducer, useContext } from "react";

import { userReducer } from "./User.reducer";
import { UserState, UserAction, UserStateProps } from "./User.schemas";

const UserContextState = createContext<UserStateProps>({} as UserStateProps);
const UserContextDispatch = createContext<Dispatch<UserAction>>(() => null);

const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, UserState);

  return (
    <UserContextState.Provider value={state}>
      <UserContextDispatch.Provider value={dispatch}>
        {children}
      </UserContextDispatch.Provider>
    </UserContextState.Provider>
  );
};

const useUserDispatchContext = (): React.Dispatch<UserAction> => {
  const dispatch = useContext(UserContextDispatch);

  if (dispatch === undefined) {
    throw new Error("state must be used within a Provider");
  }

  return dispatch;
};

const useUserStateContext = (): UserStateProps => {
  const state = useContext(UserContextState);
  if (state === undefined) {
    throw new Error("dispatch must be used within a Provider");
  }
  return state;
};

const useUser = (): [UserStateProps, React.Dispatch<UserAction>] => {
  return [useUserStateContext(), useUserDispatchContext()];
};

export { UserProvider, useUser };
