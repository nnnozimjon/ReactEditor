import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'
import IIcon from '../Icon/icon'

interface Props {
  tools: tools[]
}

interface tools {
  icon?: keyof IIcon.svgList
  name?: string
}

const ToolBar: React.FC<Props> = ({ tools }: Props) => {
  return (
    <div className={styles.container}>
      {tools?.map((_, i) => (
        <div
          key={i}
          className={styles.tool}
          style={{
            borderRight: '2px solid #222222',
          }}
        >
          {_.icon && <Icon name={_.icon} />}
          {_.name && <p>{_.name}</p>}
        </div>
      ))}
    </div>
  )
}

export default ToolBar
