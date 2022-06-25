import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Arun" },
  { id: "1", name: "Ram" },
  { id: "2", name: "Kiran" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
