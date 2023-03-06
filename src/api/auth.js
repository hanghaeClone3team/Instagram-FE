import instance from './instance/instance';

const register = async ({ email, username, nickname, password, password2 }) => {
    const response = await instance.post(`/api/user/signup`,{ email, username, nickname, password, password2 });
    console.log(response);
    return response;
}

const login = async({ email , password }) => {
    const response = await instance.post(`/api/user/login`, { email , password });
    console.log(response);
    return response;
}

const usernameCheck = async({ username }) => {
    const response = await instance.post(`/api/user/checkid`, { username });
    console.log(response);
    return response;
}

export { register , login, usernameCheck }