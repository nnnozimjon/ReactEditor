import React from 'react'
import styles from './style.module.scss'
import WindowBar from '../../../components/WindowBar'
import { Tabs } from './Hierarchy.mock'

const Hierarchy: React.FC<any> = () => {
  return (
    <div className={styles.container}>
      <WindowBar tabs={Tabs} />
    </div>
  )
}

export default Hierarchy
