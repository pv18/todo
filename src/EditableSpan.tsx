import React, {ChangeEvent, FC, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableSpan: FC<EditableSpanPropsType> = (
    {
        title,
        changeTitle
    }
) => {
    const [newTitle, setNewTitle] = useState<string>(title)
    const [editMode, setEditMode] = useState<boolean>(false)
    // Functions
    const onChangeSetUserText = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTitle(newTitle)
    }
    return (
        editMode
            ? <input
                value={newTitle}
                onChange={onChangeSetUserText}
                autoFocus={true}
                onBlur={offEditMode}
            />
            : <span onDoubleClick={onEditMode}>{title}</span>
    );
};

