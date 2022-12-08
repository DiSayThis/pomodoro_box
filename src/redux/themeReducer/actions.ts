import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../hooks';

// export const loadMeUserDataAsync = createAsyncThunk<
//   UserData,
//   string,
//   { dispatch: AppDispatch; state: RootState; rejectValue: string }
// >('meData/getData', async (token, thunkApi) => {
//   return await fetch(`https://oauth.reddit.com/api/v1/me`, {
//     headers: { Authorization: `bearer ${token}` }
//   })
//     .then(async (res) => {
//       const meData = await res.json();
//       return { name: meData.name, iconImg: meData.icon_img.split('?')[0] };
//     })
//     .catch((e: Error) => thunkApi.rejectWithValue(e.message));
// });
