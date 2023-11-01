import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  path: '/home/muhammad/Desktop/zadaca/src',
};

const AssetsPathSlice = createSlice({
  name: 'assetsPath',
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
    getPath: (state) => state,
  },
});

export const { getPath, setPath } = AssetsPathSlice.actions;

export default AssetsPathSlice.reducer;
