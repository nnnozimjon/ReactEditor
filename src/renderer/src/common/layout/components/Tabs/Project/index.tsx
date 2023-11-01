import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Icon from '../../../../components/Icon';
import { classNames } from '../../../../utils';
import Folder from './components/folder';
import { getIconForExtension } from './project.lib';
import { useDispatch, useSelector } from 'react-redux';
// import { setPath as setAssetsPath } from '../../../../../reducers/AssetsPathSlice';
import { setPath as setOpenedFile } from '../../../../../reducers/OpenedFilesSlice';

const ProjectTab = () => {
  const dispatch = useDispatch();
  const assetsPath = useSelector((state: any) => state.assetsPath.path);
  const filesPaths = useSelector((state: any) => state.openedFiles.path);

  const [assetsFolders, setAssetsFolders] = useState<any>([]);
  const [filesFolders, setFilesFolders] = useState<any>([]);

  const [activeSubHover, setActiveSubHover] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  //#######################################################
  function handleEscapeKey(event: any) {
    if (event.key === 'Backspace') {
      if (filesPaths !== assetsPath) {
        function removeLastPathSegment(path: string) {
          const pathSegments = path.split('/');
          if (pathSegments.length > 1) {
            pathSegments.pop();
          }
          return pathSegments.join('/');
        }

        dispatch(setOpenedFile(removeLastPathSegment(filesPaths)));
      }
    }
  }

  function handleRightAndLeft(event: any) {
    if (event.key === 'ArrowLeft') {
      activeSubHover &&
        activeSubHover - 1 >= 0 && // Check if it's greater than or equal to 0
        setActiveSubHover(activeSubHover - 1);
    } else if (event.key === 'ArrowRight') {
      activeSubHover &&
        activeSubHover + 1 < filesPaths.length && // Check if it's less than the array length
        setActiveSubHover(activeSubHover + 1);
    }
  }

  // Attach the event listener to the document
  document.addEventListener('keydown', handleEscapeKey);
  //######################################################

  const render = async () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', assetsPath);
    setLoading(true);
    window.electron.ipcRenderer.on('ipc-example', (days: any) => {
      setLoading(false);
      setAssetsFolders([
        {
          name: 'Assets',
          subfolders: days,
          type: 'dir',
        },
      ]);
    });
  };

  const subRender = async () => {
    window.electron.ipcRenderer.sendMessage(
      'ipc-filesFolders',
      filesPaths || assetsPath,
    );
    window.electron.ipcRenderer.on('ipc-filesFolders', (days: any) => {
      setFilesFolders(days);
    });
  };

  useEffect(() => {
    render();
  }, [dispatch]);

  useEffect(() => {
    subRender();
  }, [filesPaths, dispatch]);

  return (
    <div className={styles.projectTab}>
      <div className={styles.container}>
        <Icon name="component" />
      </div>
      <div className={styles.foldersContainer}>
        {/* first section */}
        <div className={styles.routeContainer}>
          {/* <p>Loading...</p> */}

          {!loading ? (
            assetsFolders?.map((folder: any, index: number) => (
              <div
                key={index}
                onDoubleClick={() => {
                  if (folder.type === 'dir') {
                    dispatch(setOpenedFile(folder.path));
                  }
                }}
                className={classNames([styles.folderStyle])}
              >
                <Folder
                  type={folder.type}
                  name={folder.name}
                  subfolders={folder.subfolders}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* second section */}
        <div className={styles.foldersContainer}>
          {filesFolders?.map((folder: any, i: number) => (
            <div
              tabIndex={0}
              onKeyDownCapture={(event: any) => {
                handleRightAndLeft(event);
              }}
              onClick={() => {
                setActiveSubHover(i);
              }}
              onDoubleClick={() => dispatch(setOpenedFile(folder.path))}
              className={classNames([
                styles.subFoldersContainer,
                activeSubHover === i && styles.subActive,
              ])}
            >
              {getIconForExtension(folder.ext)}
              {folder.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
