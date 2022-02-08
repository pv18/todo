import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import TodoListHeader from './TodoListHeader';
import Button from './Button';
import {FilterValuesType, TaskType} from './App';
import Task from './Task';
import {AddItemForm} from './AddItemForm';

type TodoListPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
}

const TodoList = (props: TodoListPropsType) => {
    const tasksComponents = props.tasks.map(t => {
        // как вариант в отличие от "removeTask"
        // const changeTaskStatus = () => props.changeTaskStatus(t.id)
        const removeTask = (taskID: string) => props.removeTask(taskID, props.id)
        const changeTaskStatus = (taskID: string, isDone: boolean) =>
            props.changeTaskStatus(taskID, isDone, props.id)
        return (
            <Task
                key={t.id}
                //{...t}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
            />
        )
    })

    const setAllFilter = () => props.changeFilter('all', props.id)
    const setActiveFilter = () => props.changeFilter('active', props.id)
    const setCompletedFilter = () => props.changeFilter('completed', props.id)
    const addTask = (title: string) => props.addTask(title, props.id)
    const removeTodoList = () => props.removeTodoList(props.id)

    return (
        <div>
            <TodoListHeader title={props.title} removeTodoList={removeTodoList}/>
            <AddItemForm addItem={addTask}/>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button
                    active={props.filter === 'all'}
                    title={'All'}
                    onClickHandler={setAllFilter}
                />
                <Button
                    active={props.filter === 'active'}
                    title={'Active'}
                    onClickHandler={setActiveFilter}
                />
                <Button
                    active={props.filter === 'completed'}
                    title={'Completed'}
                    onClickHandler={setCompletedFilter}
                />
            </div>
        </div>
    );
};

export default TodoList;