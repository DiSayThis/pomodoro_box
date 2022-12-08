import { createSlice } from '@reduxjs/toolkit';

export type ThemeData = {
  nightMode: boolean;
};

const initialState: ThemeData = { nightMode: false };

const userSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {}
});

export const themeReducer = userSlice.reducer;
