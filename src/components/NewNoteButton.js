import styled from 'styled-components';
import {useEasybase} from 'easybase-react';

const NewNoteButton = () => {

    const {Frame, sync} = useEasybase();

    const AddNewNote = () => {
        const newTitle = prompt('Please enter a new title: ');
        const newDescription = prompt('Please enter a new description: ');

        Frame().push({
            id: Frame().length + 1,
            title: newTitle,
            description: newDescription,
            posted: new Date().toString().slice(0,10),
        })

        sync();
    };

    return(
        <StyledDiv>
            <StyledButton onClick={AddNewNote}>
                Add Note
            </StyledButton>
        </StyledDiv>
    );
};

export default NewNoteButton;

const StyledButton = styled.button`
    margin: auto;
    background-color: white;
    border: none;
    color: black;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    border-radius: 12px;
    cursor: pointer;
`;

const StyledDiv = styled.div`
    margin: auto;
    padding-bottom: 1rem;
    width: fit-content;
`;