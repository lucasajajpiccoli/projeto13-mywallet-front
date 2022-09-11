import styled from 'styled-components';

const Input = styled.input`
    width: 87vw;
    height: 58px;
    padding: 0px 15px;
    border: none;
    border-radius: 5px;
    background-color: #FFFFFF;

    font-weight: 400;
    font-size: 20px;
    line-height:23px;
    color: #000000;

    &::placeholder {
        color: #000000;
    }

    &:focus {
        outline: none;
    }
`;

export default Input;