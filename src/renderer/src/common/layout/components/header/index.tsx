import React from 'react'
import styles from './style.module.scss'
import ToolBar from '../../../components/ToolBar'
import { HelpTools } from './Tools.mock'

const LayoutHeader: React.FC<any> = () => {
  return (
    <div className={styles.container}>
      <ToolBar tools={HelpTools} />
    </div>
  )
}

export default LayoutHeader
