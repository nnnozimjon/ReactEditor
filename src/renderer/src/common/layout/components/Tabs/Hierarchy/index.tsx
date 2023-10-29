import React from 'react';
import styles from './style.module.scss';
import Icon from '../../../../components/Icon';
// import { classNames } from '../../../../utils'

const HierarchyTab = () => {
  return (
    <>
      <div
        className={styles.hierarchyTab}
        onClick={() => console.warn('we are here!')}
      >
        <Icon name="component" />
      </div>

      <div
        className={styles.container}
        onClick={() => console.error('we are here!')}
      >
        <div className={styles.freePlace} />
        <div className={styles.componentsContainer}></div>
      </div>
    </>
  );
};

export default HierarchyTab;
