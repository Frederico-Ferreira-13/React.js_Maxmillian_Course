import { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const sbmiteHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const enteredText = todoTextInputRef.current?.value;
        
        if (enteredText?.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText!);
    };

    return (
        <form className={classes.form} onSubmit={sbmiteHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type="text" id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;