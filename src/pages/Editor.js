import React, { useState, useEffect } from 'react';
import Controlled from 'react-codemirror';

import './styles/editor2.css';
import 'react-codemirror/node_modules/codemirror/lib/codemirror.css';

import 'react-codemirror/node_modules/codemirror/theme/monokai.css';
import 'react-codemirror/node_modules/codemirror/theme/abbott.css';
import 'react-codemirror/node_modules/codemirror/theme/abcdef.css';
import 'react-codemirror/node_modules/codemirror/theme/ayu-mirage.css';
import 'react-codemirror/node_modules/codemirror/theme/base16-dark.css';
import 'react-codemirror/node_modules/codemirror/theme/base16-light.css';
import 'react-codemirror/node_modules/codemirror/theme/dracula.css';
import 'react-codemirror/node_modules/codemirror/theme/eclipse.css';
import 'react-codemirror/node_modules/codemirror/theme/idea.css';
import 'react-codemirror/node_modules/codemirror/theme/lesser-dark.css';
import 'react-codemirror/node_modules/codemirror/theme/lucario.css';
import 'react-codemirror/node_modules/codemirror/theme/mdn-like.css';

import 'react-codemirror/node_modules/codemirror/mode/javascript/javascript';
import 'react-codemirror/node_modules/codemirror/mode/css/css';
import 'react-codemirror/node_modules/codemirror/mode/htmlmixed/htmlmixed';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
    const [run, setRun] = useState(``);

    const handleCodeChange = (_editor, _data, value) => {
        setCode(value);
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setRun(
                `
                <html>
                <head>
                <style>${language === "css" ? code : ""}</style>
                </head>
                <body>${language === "htmlmixed" ? code : ""}
                <script>${language === "javascript" ? code : ""}</script>
                </body>
                </html>
                `
            );
        }, 250)
        return () => clearTimeout(time);
    }, [language, code]);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleThemeChange = (t) => {
        setTheme(t.target.value);
    };

    return (
        <>
            <div className='editor'>
                <section>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="javascript">JavaScript</option>
                    <option value="css">CSS</option>
                    <option value="htmlmixed">HTML</option>
                </select>
                <select name="select2" value={theme} onChange={handleThemeChange}>
                    <option value="monokai">monokai</option>
                    <option value="abbott">abbott</option>
                    <option value="abcdef">abcdef</option>
                    <option value="ayu-mirage">ayu-mirage</option>
                    <option value="base16-dark">base16-dark</option>
                    <option value="base16-light">base16-light</option>
                    <option value="dracula">dracula</option>
                    <option value="eclipse">eclipse</option>
                    <option value="idea">idea</option>
                    <option value="lesser-dark">lesser-dark</option>
                    <option value="lucario">lucario</option>
                    <option value="mdn-like">mdn-like</option>
                </select>
                </section>
                <Controlled
                    value={code}
                    className='code-mirror-wrapper'
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        autoCloseTags: true,
                        autoCloseBrackets: true,
                        theme: theme,
                    }}
                    onBeforeChange={handleCodeChange}
                />
                <iframe sandbox="allow-scripts allow-same-origin" title='iframe' style={{ width: '100%', height: '500px' }} src={run} />
            </div>
        </>
    );
};

export default CodeEditor;
