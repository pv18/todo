import React from 'react';
import Button from './Button';
import {FilterValuesType} from './App';

type ButtonBlockPropsType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

export const ButtonBlock: React.FC<ButtonBlockPropsType> = (
    {
        filter,
        setFilterValue
    }
) => {
    return (
        <div>
            <Button
                active={filter === 'all'}
                title={'All'}
                onClickHandler={setFilterValue('all')}
            />
            <Button
                active={filter === 'active'}
                title={'Active'}
                onClickHandler={setFilterValue('active')}
            />
            <Button
                active={filter === 'completed'}
                title={'Completed'}
                onClickHandler={setFilterValue('completed')}
            />
        </div>
    );
};

