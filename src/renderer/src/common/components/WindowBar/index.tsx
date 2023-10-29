import React, { useState } from 'react'
import { classNames } from '../../utils'
import styles from './style.module.scss'
import Icon from '../Icon'
import IIcon from '../Icon/icon'

interface Props {
  tabs: {
    view: React.ReactNode
    name: string
    icon?: keyof IIcon.svgList
  }[]
}

const WindowBar: React.FC<Props> = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tabs}>
          {tabs?.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              className={classNames([
                styles.textContainer,
                tabs.length > 1 && activeTab === i && styles.borderTop,
              ])}
            >
              {_.icon && <Icon name={_.icon} />}
              <div>{_.name}</div>
            </div>
          ))}
        </div>

        {tabs.length > 0 && (
          <div className={styles.settings}>
            <Icon name="verticalDots" />
          </div>
        )}
      </div>

      {/* View */}
      <div className={styles.view}>{tabs[activeTab].view}</div>
    </>
  )
}

export default WindowBar
