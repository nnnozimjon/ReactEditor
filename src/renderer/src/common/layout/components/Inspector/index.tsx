import React from 'react'
import styles from './style.module.scss'
import WindowBar from '../../../components/WindowBar'
import { Tabs } from './Inspector.mock'

const Inspector: React.FC<any> = () => {
  return (
    <div className={styles.container}>
      <WindowBar tabs={Tabs} />
    </div>
  )
}

export default Inspector
