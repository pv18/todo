import {TodoListType} from '../../App';
import {v1} from 'uuid';

export const todoListID_1 = v1()
export const todoListID_2 = v1()
export const todoListID_3 = v1()

const initialState: TodoListType[] = [
    {id: todoListID_1, title: 'What to learn', filter: 'all'},
    {id: todoListID_2, title: 'What to buy', filter: 'all'},
    {id: todoListID_3, title: 'What to read', filter: 'all'},
]


export const todolistReducer = (state: TodoListType[] = initialState, action: any): any => {

}