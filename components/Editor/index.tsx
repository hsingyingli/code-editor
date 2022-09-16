import React, { useEffect, useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/ext-language_tools";
import toast from 'react-hot-toast';

interface EditorInterface {
    rid: string
    code: string
    readyState: number
    sendMessage: (data: string) => void
  }

const Editor: React.FC<EditorInterface> = ({rid, code, readyState, sendMessage}) => {
  const template = `function onLoad(editor) {
  console.log("i've loaded");
}`

  const [value, setValue] = useState(code || template)

  useEffect(() => {
    setValue(code)
  }, [code])

  const handleOnChange = (value: string, e: React.ChangeEvent<HTMLInputElement>) =>{
    const data = {
        action: 'send-message',
        message: value,
        roomID: rid,
    }
    if (readyState !== 1) {
        toast.error('Not connect to server')
        return
    }
    setValue(value)
    console.log(value)
    sendMessage(JSON.stringify(data))
  }

  return (
      <AceEditor
        mode="javascript"
        theme="terminal"
        value={value}
        onChange={handleOnChange}
        height="100%"
        width="100%"
        fontSize="1rem"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
    />
  )
}


export default Editor
