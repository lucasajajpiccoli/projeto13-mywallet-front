import styled from 'styled-components';

import Transaction from './Transaction';

export default function WalletContent({ transactions, total }) {
    if (transactions.length === 0) {
        return (<NoRegisters />);
    }

    return (
        <Wrapper type={total.type}>
            <div>
                {transactions.map((transaction, index) => 
                    <Transaction
                        key={index}
                        transaction={transaction}
                    />
                )}
            </div>
            <div>
                <span>SALDO</span>
                <span type={total.type}>{total.value}</span>
            </div>
        </Wrapper>
    );
}

function NoRegisters() {
    return (
        <NoRegistersWrapper>
            Não há registros de entrada ou saída
        </NoRegistersWrapper>
    );
}

const Wrapper = styled.div`
    width: 87vw;
    height: 67vh;
    padding: 23px 12px 10px 12px;
    background-color: #FFFFFF;
    border-radius: 5px;

    & > div:nth-child(1) {
        height: calc(61vh - 23px);
        overflow: scroll;
    }

    & > div:nth-child(2) {
        height: calc(6vh - 10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
 
        font-size: 17px;
    }

    & > div:nth-child(2) span:nth-child(1) {
        font-weight: 700;
        color: #000000;
    }

    & > div:nth-child(2) span:nth-child(2) {
        font-weight: 700;
        color: ${props => props.type === "in" ? "#03AC00" : "#C70000"}
    }
`;

const NoRegistersWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #868686;
`;
