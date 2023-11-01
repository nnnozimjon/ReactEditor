import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  path: '',
};

const OpenedFilesSlice = createSlice({
  name: 'openedFiles',
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
    getPath: (state) => state,
  },
});

export const { getPath, setPath } = OpenedFilesSlice.actions;

export default OpenedFilesSlice.reducer;
