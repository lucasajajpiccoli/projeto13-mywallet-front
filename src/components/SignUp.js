import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { trySignUp } from '../services/API';

import Logo from '../style/Logo';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

import Loading from './common/Loading';

export default function SignUp() {
    const initialData = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    }

    const [data, setData] = useState({...initialData});
    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();

    function handleForm (event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    function sendForm (event) {
        event.preventDefault();
        const request = trySignUp(data);
        setDisable(true);
        request
            .catch(() => {
                alert("A tentativa de cadastro foi mal sucedida");
                setDisable(false);
                setData({...initialData});
            });
        request.then(() => {
                navigate("/");
            });
    }

    return (
        <Wrapper>
            <Logo>MyWallet</Logo>
            <Form onSubmit={sendForm}>
                <Input
                    name="name"
                    placeholder="Nome"
                    type="text"
                    value={data.name}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Input
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={data.email}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={data.password}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Input
                    name="passwordConfirmation"
                    placeholder="Confirme a senha"
                    type="password"
                    value={data.passwordConfirmation}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Button type="submit" disabled={disable}>
                    {disable ? <Loading /> : "Cadastrar"}
                </Button>
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
