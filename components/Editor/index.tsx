import React, { useState, useEffect} from 'react'
import { EditorWrapper, CodeEditor} from './style'
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools"


const Editor: React.FC = () => {
  const [code, setCode] = useState(
    `function onLoad(editor) {
  console.log("i've loaded");
}`)

  return (
    <EditorWrapper>
      <AceEditor
      mode="javascript"
      theme="dracula"
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="100vh"
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      onChange={(value, event) => setCode(value)}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        }}
    />
    </EditorWrapper>
  )
}


export default Editor
