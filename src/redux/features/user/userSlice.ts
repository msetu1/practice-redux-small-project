import { RootState } from "@/redux/store";
import { IUser } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "1",
      name: "setu Akther",
    },
    {
      id: "2",
      name: "Mst.Anna",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser) => {
  return { id: nanoid(), ...userData };
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});
export const selectUser = (state: RootState) => {
  return state.todoUser.users;
};
export const { addUser,removeUser } = UserSlice.actions;
export default UserSlice.reducer;
