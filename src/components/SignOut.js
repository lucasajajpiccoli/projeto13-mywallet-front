import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logout from '../assets/images/logout.svg';

export default function SignOut () {
    const navigate = useNavigate();

    function logOut () {
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Image src={logout} alt="" onClick={logOut} />
    );
}

const Image = styled.img`
    width: 23px;
    height: 24px;
`;