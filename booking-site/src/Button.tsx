import classNames from 'classnames';
import React from 'react';

type Props = {
    text: string,
    color: "red" | "blue",
    onClick?: () => void
}

const Button: React.FC<Props> = ({ onClick, text, color }) =>
    <button className={classNames('mb-2 border border-gray-300 text-white appearance-none block w-40 rounded-md py-3 px-4', {
        "bg-blue-600 hover:bg-blue-800": color === "blue",
        "bg-red-600 hover:bg-red-800": color === "red"
    })} onClick={onClick}>{text}</button>

export default Button