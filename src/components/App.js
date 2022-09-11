import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from '../style/globalStyle';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Wallet from './Wallet';
import Cash from './Cash';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/cash/:paramTransaction" element={<Cash />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}