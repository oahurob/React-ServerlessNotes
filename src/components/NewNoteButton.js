import styled from 'styled-components';
import {useEasybase} from 'easybase-react';

const NewNoteButton = () => {

    const {Frame, sync} = useEasybase();

    const AddNewNote = () => {
        const newTitle = prompt('Please enter a new title: ');
        const newDescription = prompt('Please enter a new description: ');

        Frame().push({
            title: newTitle,
            description: newDescription,
            posted: new Date().toString(),
        })

        sync();
    };

    return(
        <div>
            <button onClick={AddNewNote}>
                Add Note
            </button>
        </div>
    );
};

export default NewNoteButton;