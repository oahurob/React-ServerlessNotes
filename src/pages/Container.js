//components
import TopBar from '../components/TopBar';
import Notes from '../components/Notes'
import NewNoteButton from '../components/NewNoteButton';
//style
import styled from 'styled-components';

const Container = () => {
    return(
        <ContainerStyle>
            <TopBar/>
            <Notes/>
            <NewNoteButton/>
        </ContainerStyle>
    )
};

export default Container;

const ContainerStyle = styled.div`
    margin: auto;
    margin-top: 5%;
    width: 40%;
    background-color: #EF6351;
    border: 4px solid #FFE3E0;
    border-radius: 20px;
`;