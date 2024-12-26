import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

// Define a type for the slice state
interface UserDetails {
  email: string;
  userName: string;
  id: string;
}

interface UserState {
  userDetails: UserDetails;
}

// Define the initial state using that type
const initialState: UserState = {
  userDetails: {
    email: 'yashGohil@test.com',
    userName: 'YGohil',
    id: crypto.randomUUID(),
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userDetails = {
        email: '',
        userName: '',
        id: '',
      };
    },
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { logoutUser, setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.user.userDetails;

export default userSlice.reducer;
