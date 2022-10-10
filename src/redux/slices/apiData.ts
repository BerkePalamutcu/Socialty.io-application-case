import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  cardDatas: {},
  loading: false,
  error: null,
};

export const fetchApiData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get<any>('http://localhost:3000/posts_by_date');
  return response.data;
});

export const apiDataSlice = createSlice({
  name: 'apiDataSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchApiData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.cardDatas = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchApiData.rejected, (state) => {
      state.loading = false;
      state.error = 'cannot fetch data';
    });
  },
});

export default apiDataSlice.reducer;
