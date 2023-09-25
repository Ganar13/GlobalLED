import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '../hooks';

import { photoType } from '../../types/PhotoType';
import axios from 'axios';

const initialState: photoType[] = [];

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<photoType[]>) => action.payload,
  },
});

export const { setPhoto } = PostSlice.actions;

export const imgThunk = (): AppThunk => (dispatch) => {
  axios<photoType[]>('/api/photo')
    .then(({ data }) => dispatch(setPhoto(data.reverse())))
    .catch(console.log);
};

export default PostSlice.reducer;
