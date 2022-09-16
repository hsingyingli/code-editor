import React from 'react'
import AceEditor from "react-ace";
import { EditorRoomsWrapper } from './style'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const EditorRooms: React.FC = () => {

  return (
    <AceEditor
      mode="java"
      theme="github"
      //onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
  />
  )
}


export default EditorRooms
