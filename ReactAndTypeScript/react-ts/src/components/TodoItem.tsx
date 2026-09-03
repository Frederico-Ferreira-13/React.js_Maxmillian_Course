import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemove: () => void }> = (props) => {
    return (
        <li className={classes.item}>
            {props.text}
            <button onClick={props.onRemove}>Remove</button>
        </li>
    );
}

export default TodoItem;