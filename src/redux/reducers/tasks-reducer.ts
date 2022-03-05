import {TaskStateType} from '../../App';
import {v1} from 'uuid';
import {todoListID_1, todoListID_2, todoListID_3} from './todolist-reducer';

type RemoveTask = {
    type: 'REMOVE-TASK'
    todolistID: string
    taskID: string
}

type AddTask = {
    type: 'ADD-TASK'
    todolistID: string
    title: string
}

type ChangeTaskStatus = {
    type: 'CHANGE-TASK-STATUS'
    todolistID: string
    taskID: string
    value: boolean
}

type ActionTypes = RemoveTask | AddTask | ChangeTaskStatus

const initialState: TaskStateType = {
    [todoListID_1]: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/ES6', isDone: true},
        {id: v1(), title: 'REACT', isDone: true},
    ],
    [todoListID_2]: [
        {id: v1(), title: 'MILK', isDone: true},
        {id: v1(), title: 'BREAD', isDone: false},
        {id: v1(), title: 'MEAT', isDone: true},
    ],
    [todoListID_3]: [
        {id: v1(), title: 'You dont now JS', isDone: true},
        {id: v1(), title: 'Understanding Redux', isDone: false},
        {id: v1(), title: 'How to learn React', isDone: false},
    ],
}

export const tasksReducer = (state: TaskStateType = initialState, action: ActionTypes): any => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].filter(task => task.id !== action.taskID)
            }
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistID]: [
                    {id: v1(), title: action.title, isDone: false},
                    ...state[action.todolistID]
                ]
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.todolistID]: state[action.todolistID]
                    .map(task => (task.id !== action.taskID) ? task : {...task, isDone: action.value})
            }
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const removeTaskAC = (todolistID: string, taskID: string): RemoveTask => {
    return {type: 'REMOVE-TASK', todolistID, taskID}
}

export const addTaskAC = (todolistID: string, title: string): AddTask => {
    return {type: 'ADD-TASK', todolistID, title}
}

export const changeTaskStatus = (todolistID: string, taskID: string, value: boolean): ChangeTaskStatus => {
    return {type: 'CHANGE-TASK-STATUS', todolistID, taskID, value}
}