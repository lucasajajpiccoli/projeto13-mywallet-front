import styled from 'styled-components';

import logout from '../assets/images/logout.svg';

import Title from '../style/Title';
import WalletContent from './WalletContent';
import ButtonBox from './common/ButtonBox';

export default function Wallet () {
    return (
        <Wrapper>
            <Title>
                <span>Olá, Fulano</span>
                <img src={logout} alt="" />
            </Title>
            <WalletContent />
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