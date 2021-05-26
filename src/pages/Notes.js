import React, {useEffect} from 'react';
//components
import NewNoteButton from '../components/NewNoteButton';
//style
import styled from 'styled-components';
//easybase
import {useEasybase} from 'easybase-react';

const Notes = () => {

    const {Frame, sync, configureFrame} = useEasybase();

    useEffect(() => {
        configureFrame({table: 'REACT-NOTES', limit: 10});
        sync();
    }, []);

    const backendData = [
        {id: 1, title: 'Practice programming', description: 'Think of something to do', createDate: '05-26-21'},
        {id: 2, title: 'Start React Project', description: 'Init project', createDate: '05-26-21'},
        {id: 3, title: 'Add serverless functionality', description: 'commit changes', createDate: '05-26-21'}
    ];

    return(
        <div>
            <NewNoteButton/>
            <StyledDiv>
                {Frame().map(ele => 
                    <StyledNote key={ele.id}>
                        <h3>{ele.title}</h3>
                        <p>{ele.description}</p>
                        <p>{ele.posted}</p>
                    </StyledNote>
                )}
            </StyledDiv>
        </div>
    );
};

export default Notes;

const StyledDiv = styled.div`
    margin: auto;
    width: 50%;
`;

const StyledNote = styled.div`
    margin: 20px auto;
    text-align: center;
    width: 50%;
    padding: 2rem;
    border: 4px solid rgb(66, 74, 153);
    border-radius: 20px;
    background-color: rgba(112, 233, 203, 0.5);
    p{
        padding-top: 4px;
    }
`;