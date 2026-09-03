import React from 'react';
import Todo from '../models/todo';
import { useState } from 'react';

type TodosContextType = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
    items: [] as Todo[],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

export const TodosContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const contextValue: TodosContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

