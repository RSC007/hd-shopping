// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchUser = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get('http://localhost:8000/users');
      dispatch(setUser(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export const { setUser, setLoading, setError } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
