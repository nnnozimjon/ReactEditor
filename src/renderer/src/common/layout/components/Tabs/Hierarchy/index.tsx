import React from 'react';
import styles from './style.module.scss';
import Icon from '../../../../components/Icon';

const HierarchyTab = () => {
  return (
    <>
      <div className={styles.hierarchyTab}>
        <Icon name="component" />
      </div>

      <div className={styles.container}>
        <div className={styles.freePlace} />
        <div className={styles.componentsContainer}>HierArchy</div>
      </div>
    </>
  );
};

export default HierarchyTab;
