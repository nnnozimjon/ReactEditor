import React, { useState } from 'react';
import Icon from '../../../../../../components/Icon';
import styles from './styles.module.scss';

function Folder({ name, subfolders, type }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.folder}>
      <div onClick={toggleFolder} className={styles.iconsContainer}>
        {type == 'dir' &&
          (isOpen ? <Icon name="arrow" /> : <Icon name="arrowRight" />)}
        <span>
          {isOpen && type == 'dir' ? (
            <Icon name="openFolder" />
          ) : (
            <Icon name="folder" />
          )}{' '}
          {name}
        </span>
      </div>
      {isOpen && type == 'dir' && subfolders.length > 0 && (
        <div className={styles.subfolders}>
          {subfolders.map((subfolder: any, index: any) => (
            <div
              // onClick={(e) => {
              //   e.stopPropagation();
              //   onClick(subfolder.name);
              // }}
              key={index}
              style={{
                marginLeft: '20px',
              }}
            >
              <Folder
                type={subfolder.type}
                name={subfolder.name}
                subfolders={subfolder.subfolders}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Folder;
