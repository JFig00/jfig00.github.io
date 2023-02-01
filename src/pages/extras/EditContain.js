import React, { useState } from "react";

import 'react-codemirror/node_modules/codemirror/lib/codemirror.css';
import 'react-codemirror/node_modules/codemirror/mode/xml/xml';
import 'react-codemirror/node_modules/codemirror/mode/javascript/javascript';
import 'react-codemirror/node_modules/codemirror/mode/css/css';

import 'react-codemirror/node_modules/codemirror/theme/abbott.css';
import 'react-codemirror/node_modules/codemirror/theme/ayu-mirage.css';
import 'react-codemirror/node_modules/codemirror/theme/blackboard.css';
import 'react-codemirror/node_modules/codemirror/theme/eclipse.css';
import 'react-codemirror/node_modules/codemirror/theme/lucario.css';
import 'react-codemirror/node_modules/codemirror/theme/mdn-like.css';
import 'react-codemirror/node_modules/codemirror/theme/midnight.css';
import 'react-codemirror/node_modules/codemirror/theme/monokai.css';
import 'react-codemirror/node_modules/codemirror/theme/paraiso-light.css';
import 'react-codemirror/node_modules/codemirror/theme/yeti.css';

import Controlled from 'react-codemirror';

const EC = ({ language, value, setEditorState }) => {
    const [theme, setTheme] = useState('abbott');

    const themeArray = ['abbott', 'ayu-mirage', 'blackboard', 'eclipse', 'lucario', 'mdn-like', 'midnight', 'monokai', 'paraiso-light', 'yeti']

    const handleChange = (EC, data, value) => {
        setEditorState(value);
    }
    return (
        <>
            <div className="edit-contain">
                {<div>
                    <label htmlFor='meow'>Select a theme: Using </label>
                    <select name="theme" onChange={(e) => {
                        setTheme(e.target.value)
                    }}>
                        {
                            themeArray.map((theme) => (
                                <option key={theme}>{theme}</option>
                            ))
                        }
                    </select>
                </div>}
                <Controlled
                    onBeforeChange={handleChange}
                    value={value}
                    className='code-mirror-wrapper'
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: theme,
                        autoCloseTags: true,
                        autoCloseBrackets: true,
                    }}
                />
            </div>
        </>
    )
}

export default EC;