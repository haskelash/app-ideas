import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: null,
  reducers: {
    projectSelected(state, action) {
      return action.payload;
    }
  }
});

export const { projectSelected } = projectSlice.actions;

export default projectSlice.reducer;
