import Button from './extras/Button';
import EC from './extras/EditContain';
import 'react-codemirror/node_modules/codemirror/addon/edit/closetag';
import 'react-codemirror/node_modules/codemirror/addon/edit/closebrackets';
import React, { useState, useEffect } from 'react';

const Editor = () => {
    const [openEditor, setOpenEditor] = useState('html');
    const [activeButton, setActiveButton] = useState("html");

    const onTabClick = (editName) => {
        setOpenEditor(editName);
        setActiveButton(editName);
    }

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const [srcDoc, setSrcDoc] = useState(``);

    useEffect(() => {
        const time = setTimeout(() => {
            setSrcDoc(
                `
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
                `
            );
        }, 250);
        return ()=> clearTimeout(time)
    }, [html,css,js]);

    return (
        <>
            <div className="edit">
                <h1>Welcome to the Code Editor</h1>
                <div className="container">
                    <Button backgroundColor={activeButton==='html' ? "blue" : ""} prop='HTML' onClick={() => {
                        onTabClick('html')
                    }}></Button>
                    <Button backgroundColor={activeButton==='css' ? "blue" : ""} prop='CSS' onClick={() => {
                        onTabClick('css')
                    }}></Button>
                    <Button backgroundColor={activeButton==='js' ? "blue" : ""} prop='JavaScript' onClick={() => {
                        onTabClick('js')
                    }}></Button>
                </div>
                <div className="the-editor">
                    {
                        openEditor === "html" ? (
                            <EC
                                language="xml"
                                displayName="HTML"
                                value={html}
                                setEditorState={setHtml}
                            />
                        ) : openEditor === 'css' ? (
                            <EC
                                language="css"
                                displayName="CSS"
                                value={css}
                                setEditorState={setCss}
                            />
                        ) : (
                            <EC
                                language="javascript"
                                displayName="JS"
                                value={js}
                                setEditorState={setJs}
                            />
                        )
                    }
                </div>
                <div><iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%"></iframe></div>
            </div>
        </>
    )
}

export default Editor;