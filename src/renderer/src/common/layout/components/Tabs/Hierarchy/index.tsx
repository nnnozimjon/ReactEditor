import React, { useState } from 'react';
import styles from './style.module.scss';
import Icon from '../../../../components/Icon';
import TagMapper from './components/TagMapper';

const TagsLevel: any = [
  {
    name: '1',
    id: '1',
    type: 'div',
    subTags: [],
  },
  {
    name: '4',
    id: '2',
    type: 'div',
    subTags: [],
  },
];

const HierarchyTab = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const [tagsLevel, setTagsLevel] = useState<any>(TagsLevel);

  const addTag = (sourceNodeId: any, targetNodeId: any, tag: any) => {
    const updatedTagsLevel = JSON.parse(JSON.stringify(tagsLevel)); // Deep copy of tagsLevel

    const sourceNode = findNodeById(updatedTagsLevel, sourceNodeId);
    const targetNode = findNodeById(updatedTagsLevel, targetNodeId);

    if (sourceNode && targetNode) {
      sourceNode.subTags = sourceNode.subTags.filter(
        (subTag: any) => subTag.id !== tag.id,
      );
      targetNode.subTags.push(tag);
    }

    setTagsLevel(updatedTagsLevel);
  };

  console.log(tagsLevel);

  function removeTag(nodeId: number, tagId: number) {
    const node: any = findNodeById(TagsLevel, nodeId);

    if (node) {
      node.subTags = node.subTags.filter((subTag: any) => subTag.id !== tagId);
    }
  }

  // Function to find a node by ID in the TagsLevel data structure
  function findNodeById(nodes: any[], id: number) {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.subTags?.length > 0) {
        const foundNode: any = findNodeById(node.subTags, id);
        if (foundNode) return foundNode;
      }
    }
    return null;
  }

  const handleDragStart = (e: any, item: any) => {
    e.dataTransfer.setData('text/plain', item);
    console.log(item);
    setDraggedItem(item);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, targetItem: any) => {
    console.log('taarget', targetItem);
    if (draggedItem === targetItem) return;

    // Use the addTag function to update the data structure
    addTag(draggedItem, targetItem, draggedItem);

    setDraggedItem(null);
  };

  return (
    <>
      <div className={styles.hierarchyTab}>
        <Icon name="plus" />
      </div>

      <div className={styles.container}>
        <div className={styles.freePlace} />
        <div className={styles.componentsContainer}>
          {TagsLevel?.map((tag: any, i: number) => (
            <TagMapper
              key={i}
              draggable
              onDragOver={handleDragOver}
              onDrop={(e: any) => handleDrop(e, tag.id)}
              onDragStart={(e: any) => handleDragStart(e, tag.id)}
              type={tag.type}
              id={tag.id}
              subTags={tag.subTags}
              name={tag.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HierarchyTab;
