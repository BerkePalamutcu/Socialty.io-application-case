import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface toggleAccordion {
  accordion: boolean;
}

const initialState: toggleAccordion = {
  accordion: true,
};

export const accordionSlice = createSlice({
  name: 'accordionSlice',
  initialState,
  reducers: {
    toggleAccordion: (state, action: PayloadAction<boolean>) => {
      state.accordion = action.payload;
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;
export default accordionSlice.reducer;
