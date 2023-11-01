import React, { useRef, useState } from 'react';
import styles from './style.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeTab = () => {
  const textareaRef = useRef<any>(null);
  const syntaxHighlighterRef = useRef(null);
  const [codeString, setCodeString] = useState<string>(``);

  return (
    <div className={styles.container}>
      <div className={styles.side}></div>
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
        <SyntaxHighlighter
          ref={syntaxHighlighterRef}
          language="javascript"
          style={docco}
          customStyle={{
            fontSize: '25px',
            height: '100%',
            flex: '1',
            background: 'transparent',
            lineHeight: '26px',
            overflowY: 'hidden',
            outline: 'none',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeTab;
