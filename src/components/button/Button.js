import React from "react";
import './Button.css';

const Button = ({fruitName, setFruitName, name}) => {
    return (
        <article className="card">
            <h2>{name}</h2>
            <button onClick={() => setFruitName(fruitName - 1)}
                    disabled={fruitName === 0}>
                -
            </button>
            {fruitName}
            <button
                onClick={() => setFruitName(fruitName + 1)} >
                +
            </button>
        </article>

    );

}

export default Button