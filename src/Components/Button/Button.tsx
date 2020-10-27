import React from 'react';


interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: JSX.Element;
    onClick?: () => void;
};

export const Button: React.FC<IButton> = (props) => (
    <button
        {...props}
        onClick={props.onClick}
        className='waves-effect waves-light btn'
    >{props.icon || props.title}
    </button>
);
