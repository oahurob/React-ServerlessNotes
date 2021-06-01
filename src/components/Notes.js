import React, {useEffect} from 'react';
//style
import styled from 'styled-components';
//image
import TrashCan from '../img/trash-can.png';
//easybase
import {useEasybase} from 'easybase-react';

const Notes = () => {

    const {Frame, sync, configureFrame} = useEasybase();

    useEffect(() => {
        configureFrame({table: 'REACT-NOTES', limit: 10});
        sync();
    }, []);

    return(
        <div>
            <div>
                {Frame().map(ele => 
                    <Note key={ele.id}>
                        <ButtonContainer>
                            <button><img src={TrashCan} alt="" /></button>
                        </ButtonContainer>
                        <h3>{ele.title}</h3>
                        <p>{ele.description}</p>
                        <p>{ele.posted}</p>
                    </Note>
                )}
            </div>
        </div>
    );
};

export default Notes;

const Note = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    text-align: center;
    width: 40%;
    padding: 1rem;
    border: 4px solid #FFE3E0;
    border-radius: 20px;
    background-color: #2EC0F9;
    p{
        padding-top: 4px;
    }
    button{
        width: 30px;
        height: 30px;
        align-self: flex-end;
        border-radius: 20px;
        border: 2px solid #FFE3E0;
        background-color: #EF6351;
        cursor: pointer;
    }
`;
const ButtonContainer = styled.div`
    width: fit-content;
    align-self: flex-end;
    margin-top: -30px;
    margin-right: -22px
`;