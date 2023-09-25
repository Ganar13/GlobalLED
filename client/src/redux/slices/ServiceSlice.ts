import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hooks';
import { ServicesType } from '../../types/ServicesType';
import axios from 'axios';

interface ServicesState {
  services: ServicesType[];
}

const initialState: ServicesState = {
  services: [],
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<ServicesType[]>) => {
      state.services = action.payload;
    },
  },
});

export const { setServices } = serviceSlice.actions;

export const fetchServices = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get<ServicesType[]>('/api/services');
    dispatch(setServices(response.data));
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};

export default serviceSlice.reducer;
