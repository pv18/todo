import React from 'react';
import {FilterValuesType} from './App';

type ButtonPropsType = {
    active: boolean
    title: string
    onClickHandler: () => void
}

const Button: React.FC<ButtonPropsType> = (
    {
        title,
        onClickHandler,
        active,
    }
) => {
    return (
        <button
            className={active ? "active" : ""}
            onClick={onClickHandler}>
            {title}
        </button>
    )
};

export default Button;