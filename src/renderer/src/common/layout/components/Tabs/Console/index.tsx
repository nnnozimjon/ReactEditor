import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../../../components/Icon'
import { DebugLogger } from './Console.lib'
import { classNames } from '../../../../utils'
import { TabButtons } from './Console.mock'

const ConsoleTab: React.FC<any> = () => {
  const [activeTabButton, setActiveTabButton] = useState(0)
  const [clickedMessage, setClickedMessage] = useState<number>(0)
  const dispatch = useDispatch()
  const capturedMessages = useSelector((state: any) => state.console.data)

  useEffect(() => {
    DebugLogger(dispatch)
  }, [dispatch])

  return (
    <div className={styles.consoleTab}>
      <div className={styles.container}>
        {TabButtons?.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => {
              _.func && _?.func(dispatch)
              setActiveTabButton(i)
            }}
            className={classNames([
              activeTabButton === i &&
                activeTabButton !== 0 &&
                styles.activeTabButton,
            ])}
          >
            {_.name}
          </button>
        ))}
      </div>
      <div className={styles.messageContainer}>
        {capturedMessages.map((message: any, i: number) => (
          <div
            key={i}
            className={classNames([
              styles.message,
              i === clickedMessage && styles.checkedMessage,
            ])}
            onClick={() => setClickedMessage(i)}
          >
            <Icon name={message.type === 'warn' ? 'bigWarning' : 'bigError'} />
            {message.message}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConsoleTab
