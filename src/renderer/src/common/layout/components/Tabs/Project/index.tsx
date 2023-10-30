import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Icon from '../../../../components/Icon';
import { classNames } from '../../../../utils';
import Folder from './components/folder';

const ProjectTab = () => {
  const [activeFolder, setActiveFolder] = useState<string>(
    '/home/muhammad/Desktop/zadaca',
  );
  const [folders, setFolders] = useState<any>([]);
  const [subFolder, setSubFolder] = useState<any>([]);
  const [loading, setLoadoing] = useState(false);

  useEffect(() => {
    const render = async () => {
      window.electron.ipcRenderer.sendMessage('ipc-example', activeFolder);
      setLoadoing(true);
      window.electron.ipcRenderer.on('ipc-example', (days: any) => {
        setLoadoing(false);
        setFolders([
          {
            name: 'Assets',
            subfolders: days,
            type: 'dir',
          },
        ]);
        setSubFolder(days);
      });
    };

    render();
  }, [activeFolder]);

  console.log(folders);

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
            folders?.map((folder: any, index: number) => (
              <div key={index} className={classNames([styles.folderStyle])}>
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
          {subFolder?.map((folder: any, i: number) => (
            <div
              onClick={() => setActiveFolder(folder.path)}
              className={styles.subFoldersContainer}
            >
              <Icon name="bigFolder" />
              {folder.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
