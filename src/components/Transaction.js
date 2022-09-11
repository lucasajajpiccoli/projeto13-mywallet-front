import styled from 'styled-components';

export default function Transaction() {
    return (
        <Wrapper type="in">
            <div>
                <div>30/11</div>
                <div>Almoço mãe</div>
            </div>
            <div>39,90</div>
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