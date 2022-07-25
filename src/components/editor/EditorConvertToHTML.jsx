import React, { useState } from 'react';
import './EditorConvertToHTML.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';


const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };



  return (
    <div className='editor-contanier'>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper main-wrapper"
        editorClassName="demo-editor editor"
        toolbarClassName='editor-toolbar toolbar'
        toolbar={{
          inline: {
            className: "flex",
            bold: {
              className: "toolbar-btn"
            },
            italic: {
              className: "toolbar-btn"
            },
            underline: {
              className: "toolbar-btn"
            },
            strikethrough: {
              className: "toolbar-btn"
            },
            monospace: {
              className: "toolbar-btn"
            },
            superscript: {
              className: "toolbar-btn"
            },
            subscript: {
              className: "toolbar-btn"
            },

          },
          list: {
            className: "flex"
          },
          textAlign: {
            className: "flex"
          },
          blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
            className: 'flex dropdown-wrapper dropdown-btn',
            component: undefined,
            dropdownClassName: "dropdown-list-wrapper",
          },
          fontFamily: {
            options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
            dropdownClassName: "dropdown-list-wrapper",
            className: "dropdown-wrapper dropdown-btn",
            inDropdown: true
          },
          fontSize: {
            inDropdown: true,
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
            className: "flex dropdown-wrapper dropdown-btn-font-size",
            dropdownClassName: 'dropdown-list-wrapper',
          },
          link: {
            className: "flex"
          },
          history: {
            className: "flex"
          },
          list: {
            inDropdown: false,
            className: 'flex',
            component: undefined,
            dropdownClassName: undefined,
            options: ['unordered', 'ordered', 'indent', 'outdent'],
            unordered: { className: 'toolbar-btn' },
            ordered: { className: "toolbar-btn" },
            indent: { className: 'toolbar-btn' },
            outdent: { className: 'toolbar-btn' },
          },
          textAlign: {
            inDropdown: true,
            className: "flex",
            // component: undefined,
            dropdownClassName: 'dropdown-list-wrapper',
            options: ['left', 'center', 'right', 'justify'],
            left: { className: undefined },
            center: { className: undefined },
            right: { className: undefined },
            justify: { className: undefined },
          },
          emoji: {
            inDropdown: true,
            className: "flex dropdown-wrapper",
            popupClassName: "dropdown-bundle-wrapper",
          },
          image: {

          }
        }}
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
          style={{width: "1000px"}}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
    </div>
  );
}

export default EditorConvertToHTML;