import React, { useState } from 'react';
import Icon from '../../../../../../components/Icon';
import styles from './styles.module.scss';

function TagMapper({
  name,
  id,
  subTags,
  type,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      draggable={draggable}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragStart={onDragStart}
      className={styles.tag}
    >
      <div onClick={toggleFolder} className={styles.iconsContainer}>
        {subTags?.length > 0 &&
          (isOpen ? <Icon name="arrow" /> : <Icon name="arrowRight" />)}
        <span>
          {<Icon name="tag" />}
          {name}
        </span>
      </div>
      {isOpen && subTags?.length > 0 && (
        <div className={styles.subTags}>
          {subTags.map((tag: any, index: any) => (
            <div
              key={index}
              style={{
                marginLeft: '20px',
              }}
            >
              <TagMapper
                draggable={draggable}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragStart={onDragStart}
                id={tag.id}
                type={tag.type}
                subTags={tag.subTags}
                name={tag.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagMapper;
