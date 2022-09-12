import axios from 'axios';

const API_Address = process.env.REACT_APP_API_URI;

const config = {
    headers: {
        Authorization: ""
    }
};

function trySignIn (body) {
    const address = `${API_Address}/signin`;
    return axios.post(address, body);
}

function trySignUp (body) {
    const address = `${API_Address}/signup`;
    return axios.post(address, body);
}

function readWallet (token) {
    const address = `${API_Address}/wallet`;
    config.headers.Authorization = `Bearer ${token}`;
    return axios.get(address, config);
}

function createTransaction (token, param, body) {
    const address = `${API_Address}/cash/${param}`;
    config.headers.Authorization = `Bearer ${token}`;
    return axios.post(address, body, config);
}

export {
    trySignIn,
    trySignUp,
    readWallet,
    createTransaction
};
