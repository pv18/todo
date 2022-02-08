import React from 'react';
import Button from './Button';

type TodoListHeaderPropsType = {
    title: string
    removeTodoList: ()=> void
}

const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({ title, ...props}) => {
    return  (
        <h3>
            {title}
            <Button title={'X'} onClickHandler={props.removeTodoList} active={false}/>
        </h3>
    );
};

export default TodoListHeader;