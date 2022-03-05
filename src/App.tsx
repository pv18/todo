import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from './redux/store';
import {removeTaskAC} from './redux/reducers/tasks-reducer';
// C
// R
// U
// D
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export type TaskStateType = {
    [todoListID: string]: Array<TaskType>
}

export type FilterValuesType = 'all' | 'active' | 'completed'

const App = () => {
    // BLL:
    // const todoListID_1 = v1()
    // const todoListID_2 = v1()
    // const todoListID_3 = v1()
    //
    // const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    //     {id: todoListID_1, title: 'What to learn', filter: 'all'},
    //     {id: todoListID_2, title: 'What to buy', filter: 'all'},
    //     {id: todoListID_3, title: 'What to read', filter: 'all'},
    // ])
    // const [tasks, setTasks] = useState<TaskStateType>({
    //     [todoListID_1]: [
    //         {id: v1(), title: 'HTML&CSS', isDone: true},
    //         {id: v1(), title: 'JS/ES6', isDone: true},
    //         {id: v1(), title: 'REACT', isDone: true},
    //     ],
    //     [todoListID_2]: [
    //         {id: v1(), title: 'MILK', isDone: true},
    //         {id: v1(), title: 'BREAD', isDone: false},
    //         {id: v1(), title: 'MEAT', isDone: true},
    //     ],
    //     [todoListID_3]: [
    //         {id: v1(), title: 'You dont now JS', isDone: true},
    //         {id: v1(), title: 'Understanding Redux', isDone: false},
    //         {id: v1(), title: 'How to learn React', isDone: false},
    //     ],
    // })
    const todoLists = useSelector<AppRootState, TodoListType[]>(state => state.todolists)
    const tasks = useSelector<AppRootState, TodoListType[]>(state => state.tasks)
    const dispatch = useDispatch()
    // Functions
    const removeTask = (taskID: string, todoListID: string) => {
        dispatch(removeTaskAC(todoListID, taskID))
    }
    const addTask = (title: string, todoListID: string) => {
        dispatch(addTask(title, todoListID))
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        dispatch(changeTaskStatus(taskID, isDone, todoListID))
    }
    // const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
    //
    //     setTasks({
    //         ...tasks,
    //         [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {
    //             ...t,
    //             title
    //         } : t)
    //     })
    // }
    // const changeFilter = (filter: FilterValuesType, todoListID: string) => {
    //     const upDatedTodoLists = todoLists.map(tl => tl.id === todoListID
    //         ? {...tl, filter: filter}
    //         : tl)
    //     setTodoLists(upDatedTodoLists)
    // }
    // const removeTodoList = (todoListID: string) => {
    //     setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
    //     delete tasks[todoListID]
    // }
    // const addTodoList = (title: string) => {
    //     const newTodoListID = v1()
    //     const newTodoList: TodoListType = {
    //         id: newTodoListID,
    //         title,
    //         filter: 'all'
    //     }
    //     setTodoLists([...todoLists, newTodoList])
    //     setTasks({...tasks, [newTodoListID]: []})
    // }
    // const getTasksForRender = (todoList: TodoListType) => {
    //     switch (todoList.filter) {
    //         case 'active':
    //             return tasks[todoList.id].filter(t => !t.isDone)
    //         case 'completed':
    //             return tasks[todoList.id].filter(t => t.isDone)
    //         default:
    //             return tasks[todoList.id]
    //     }
    // }

    // Components before rendering
    const todoListsComponents = todoLists.map(tl => {
        const tasksForRender = getTasksForRender(tl)
        return (
            <TodoList
                key={tl.id}
                id={tl.id}
                title={tl.title}
                tasks={tasksForRender}
                filter={tl.filter}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                removeTodoList={removeTodoList}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        )
    })

    // GUI:
    return (
        <div className="App">
            <AddItemForm addItem={addTodoList}/>
            {todoListsComponents}
        </div>
    );
}

export default App;
