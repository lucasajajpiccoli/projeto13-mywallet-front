import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../style/Logo';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

export default function SignIn() {
    return (
        <Wrapper>
            <Logo>MyWallet</Logo>
            <Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Button>Entrar</Button>
            </Form>
            <div><Link to="/signup">Primeira vez? Cadastre-se</Link></div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 87vw;
    margin: calc(50vh - 174px) auto calc(50vh - 142px) auto;

    & > div {
        display: flex;
        justify-content: center;
    }

    & > form {
        height: 188px;
        margin: 24px 0px 36px 0px;
    }

    div:nth-child(3) > a {
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
`;