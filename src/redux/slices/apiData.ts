import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  cardDatas: {},
  loading: false,
  error: null,
};

export const fetchApiData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get<any>(
    'https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee',
    {
      headers: {
        'X-ACCESS-KEY':
          '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW',
      },
    }
  );
  return response.data.record.posts_by_date;
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
