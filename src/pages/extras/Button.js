import React from 'react';

const Button = ({ prop, onClick }) => {
    return (
        <>
            <button onClick={onClick}>
                {prop}
            </button>
        </>
    )
}

export default Button;