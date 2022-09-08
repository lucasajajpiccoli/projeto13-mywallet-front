import styled from 'styled-components';

export default function ButtonBox({ children }) {
    return (
        <Wrapper>
            <div>{children}</div>
            <div>
                <div>Nova</div>
                <div>{children === "+" ? "entrada" : "saída"}</div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 41vw;
    height: calc(28vh - 78px);
    border-radius: 5px;
    background-color: #A328D6;
    position: relative;

    & > div:nth-child(1) {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 11px;
        left: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #A328D6;
        border: 1px solid #FFFFFF;
        border-radius: 50%;

        font-weight: 400;
        font-size: 10px;
        color: #FFFFFF;
    }

    & > div:nth-child(2) {
        position: absolute;
        bottom: 10px;
        left: 10px;

        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;

