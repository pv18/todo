import {combineReducers, createStore} from 'redux';
import {todolistReducer} from './reducers/todolist-reducer';
import {tasksReducer} from './reducers/tasks-reducer';

const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>