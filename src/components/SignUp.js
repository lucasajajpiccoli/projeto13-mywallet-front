import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../style/Logo';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

export default function SignUp () {
    return (
        <Wrapper>
            <Logo>MyWallet</Logo>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a senha" />
                <Button>Cadastrar</Button>
            </Form>
            <div><Link to="/">Já tem uma conta? Entre agora!</Link></div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 87vw;
    margin: calc(50vh - 239px) auto calc(50vh - 219px) auto;

    & > div {
        display: flex;
        justify-content: center;
    }

    & > form {
        height: 330px;
        margin: 28px 0px 32px 0px;
    }

    div:nth-child(3) > a {
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
`;