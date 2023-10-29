import {
  captureConsoleMessage,
  clearCapturedMessages,
} from '../../../../../reducers/ConsoleTrackerSlice'

const DebugLogger = (dispatch: any) => {
  const originalConsoleError = console.error
  const originalConsoleWarn = console.warn

  console.error = (...args) => {
    // Capture the real error message
    const message = args
      .map(arg => (arg instanceof Error ? arg.message : arg))
      .join(' ')

    // Dispatch the real error message and type
    dispatch(captureConsoleMessage({ message, type: 'error' }))

    originalConsoleError(...args)
  }

  console.warn = (...args) => {
    // Capture the real warning message
    const message = args
      .map(arg => (arg instanceof Error ? arg.message : arg))
      .join(' ')

    // Dispatch the real warning message and type
    dispatch(captureConsoleMessage({ message, type: 'warn' }))

    originalConsoleWarn(...args)
  }

  console.log = (...args) => {
    // Capture the real warning message
    const message = args
      .map(arg => (arg instanceof Error ? arg.message : arg))
      .join(' ')

    // Dispatch the real warning message and type
    dispatch(captureConsoleMessage({ message, type: 'warn' }))

    originalConsoleWarn(...args)
  }
  console.info = (...args) => {
    // Capture the real warning message
    const message = args
      .map(arg => (arg instanceof Error ? arg.message : arg))
      .join(' ')

    // Dispatch the real warning message and type
    dispatch(captureConsoleMessage({ message, type: 'warn' }))

    originalConsoleWarn(...args)
  }

  return () => {
    console.error = originalConsoleError
    console.warn = originalConsoleWarn
  }
}

const ClearDebugLogger = (dispatch: any) => {
  dispatch(clearCapturedMessages())
}

export { DebugLogger, ClearDebugLogger }
