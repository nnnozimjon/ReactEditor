import React, { useRef, useState } from 'react';
import styles from './style.module.scss';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeTab = () => {
  const textareaRef = useRef<any>();
  const [codeString, setCodeString] = useState<string>('');

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <p>1</p>
        <p>2</p>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => textareaRef.current?.focus()}
        onClick={() => textareaRef.current?.focus()}
        className={styles.codeView}
      >
        <textarea
          ref={textareaRef}
          autoFocus={true}
          onChange={(e) => setCodeString(e.target.value)}
          className={styles.codeField}
        />
        {/* <SyntaxHighlighter
          language="javascript"
          style={docco}
          customStyle={{
            height: '100%',
            flex: '1',
            background: 'transparent',
            lineHeight: '26px',
            overflow: 'auto',
            overflowY: 'scroll',
          }}
        >
          {codeString}
        </SyntaxHighlighter> */}
      </div>
    </div>
  );
};

export default CodeTab;
