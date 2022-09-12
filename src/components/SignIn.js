import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { trySignIn } from '../services/API';

import Logo from '../style/Logo';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

import Loading from './common/Loading';

export default function SignIn() {
    const initialData = {
        email: "",
        password: ""
    };

    const [data, setData] = useState({ ...initialData });
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
        const request = trySignIn(data);
        setDisable(true);
        request
            .catch(() => {
                alert("A tentativa de log-in foi mal sucedida");
                setDisable(false);
                setData({...initialData});
            });
        request.then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("name", response.data.name);
                navigate("/wallet");
            });
    }

    return (
        <Wrapper>
            <Logo>MyWallet</Logo>
            <Form onSubmit={sendForm}>
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
                <Button type="submit" disabled={disable}>
                    {disable ? <Loading /> : "Entrar"}
                </Button>
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
