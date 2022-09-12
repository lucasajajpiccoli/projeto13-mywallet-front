import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { createTransaction } from '../services/API';

import Loading from './common/Loading';

import Title from '../style/Title';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

export default function Cash() {
    const { paramTransaction } = useParams();
    const transactionTypes = [{
        param: "in",
        name: "entrada"
    },
    {
        param: "out",
        name: "saída"
    }];
    const { name } = transactionTypes
        .find(transaction => paramTransaction === transaction.param);

    const initialData = {
        value: "",
        description: ""
    }
    const [data, setData] = useState({ ...initialData });
    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();

    function handleForm(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    function sendForm(event) {
        event.preventDefault();
        const request = createTransaction(localStorage.getItem("token"), paramTransaction, data);
        console.log(data);
        setDisable(true);
        request
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.setItem("token", "");
                    localStorage.setItem("name", "");
                    navigate("/");
                } else {
                    alert("Os dados devem ser preenchidos corretamente");
                    setDisable(false);
                    setData({...initialData});
                }
            });
        request.then(() => {
                navigate("/wallet");
            });
    }

    return (
        <Wrapper>
            <Title>Nova {name}</Title>
            <Form onSubmit={sendForm}>
                <Input
                    name="value"
                    placeholder="Valor"
                    type="text"
                    value={data.value}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Input
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    value={data.description}
                    onChange={handleForm}
                    disabled={disable}
                    required
                />
                <Button type="submit" disabled={disable}>
                    {disable ? <Loading /> : `Salvar ${name}`}
                </Button>
            </Form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 87vw;
    margin: 0px auto;

    form {
        margin-top: 40px;
        height: 188px;
    }
`;
