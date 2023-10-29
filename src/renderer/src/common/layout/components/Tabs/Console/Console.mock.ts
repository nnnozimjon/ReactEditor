import { ClearDebugLogger } from './Console.lib'

const TabButtons: any = [
  { name: 'Clear', func: (dispatch: any) => ClearDebugLogger(dispatch) },
  { name: 'Errors' },
  { name: 'Warnings' },
]

export { TabButtons }
