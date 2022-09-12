import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { readWallet } from '../services/API';

import Title from '../style/Title';

import Loading from './common/Loading';
import ButtonBox from './common/ButtonBox';

import SignOut from './SignOut';
import WalletContent from './WalletContent';

export default function Wallet () {
    const [transactions, setTransactions] = useState(null);
    const [total, setTotal] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const request = readWallet(localStorage.getItem("token"));
        request
            .catch(() => {
                localStorage.setItem("token", "");
                localStorage.setItem("name", "");
                navigate("/");
            })
            .then(response => {
                setTransactions(response.data.transactions);
                setTotal(response.data.total);
            });
    }, []);

    if (transactions === null) {
        return (
            <Loading />
        );
    }

    return (
        <Wrapper>
            <Title>
                <span>Olá, {localStorage.getItem("name")}</span>
                <SignOut />
            </Title>
            <WalletContent transactions={transactions} total={total} />
            <div>
                <ButtonBox>+</ButtonBox>
                <ButtonBox>-</ButtonBox>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 87vw;
    margin: 0px auto;

    & > div:nth-child(2) {
        margin: 27px auto 13px auto;
    }

    div:nth-child(3) {
        display: flex;
        justify-content: space-between;
    }
`;