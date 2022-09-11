import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../style/Title';
import Form from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

export default function Cash () {
    const { paramTransaction } = useParams();

    const transactionTypes = [{
        signal: "+",
        param: "in",
        name: "entrada"
    },
    {
        signal: "-",
        param: "out",
        name: "saída"
    }];
    const { signal, name } = transactionTypes
        .find(transaction => paramTransaction === transaction.param);

    return (
        <Wrapper>
            <Title>Nova {name}</Title>
            <Form>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button>Salvar {name}</Button>
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