import React from 'react'
import styles from './style.module.scss'
import Icon from '../../../../components/Icon'
import { classNames } from '../../../../utils'

const ProjectTab = () => {
  const activeFolder = true
  return (
    <div className={styles.projectTab}>
      <div className={styles.container}>
        <Icon name="component" />
      </div>
      <div className={styles.foldersContainer}>
        {/* first section */}
        <div className={styles.routeContainer}>
          <div
            className={classNames([
              styles.folderStyle,
              activeFolder && styles.activeFolder,
            ])}
          >
            <Icon name="arrow" />
            <Icon name="openFolder" />
            <p>Assets</p>
          </div>
        </div>

        {/* second section */}
        <div className={styles.foldersContainer}>Folders Map</div>
      </div>
    </div>
  )
}

export default ProjectTab
