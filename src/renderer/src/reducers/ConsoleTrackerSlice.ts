import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define the type for captured messages
type CapturedMessage = {
  message: string
  type: 'error' | 'warn'
}

const initialState = {
  data: [] as CapturedMessage[],
}

const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    captureConsoleMessage: (state, action: PayloadAction<CapturedMessage>) => {
      // Update the state to store the captured message
      state.data.push(action.payload)
    },
    clearCapturedMessages: state => {
      // Clear the captured messages
      state.data = []
    },
  },
})

export const { captureConsoleMessage, clearCapturedMessages } =
  consoleSlice.actions

export default consoleSlice.reducer
