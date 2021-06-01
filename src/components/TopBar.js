import styled from 'styled-components';

const TopBar = () => {
    return(
        <StyledBar>
            <StyledMiddle>
                <h1>Title</h1>
                <input type="Enter text" />
            </StyledMiddle>
        </StyledBar>
    )
};

export default TopBar;

const StyledMiddle = styled.div`
    display: flex;
    width: fit-content;
    margin: auto;
    input{
        height: 100%;
        align-self: center;
        border-style: none;
        border-radius: 5px;
        outline: none;
    }
`;

const StyledBar = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: auto;
    padding-top: 1rem;
    width: 40%;
`;