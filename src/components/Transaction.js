import styled from 'styled-components';

export default function Transaction({ transaction }) {
    const { date, description, value, type } = transaction;

    return (
        <Wrapper type={type}>
            <div>
                <div>{date}</div>
                <div>{description}</div>
            </div>
            <div>{value}</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-bottom: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 400;
    font-size: 16px;

    & > div:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div:nth-child(1) > div:nth-child(1) {
        width: 48px;
        
        color: #C6C6C6;
    }

    div:nth-child(1) > div:nth-child(2) {
        width: calc(87vw - 146px);

        color: #000000;
    }

    & > div:nth-child(2) {
        width: 62px;

        text-align: right;
        color: ${props => props.type === "in" ? "#03AC00" : "#C70000"}
    }
`;
