import { LOGIN, LOGOUT } from "../types/authType";

const setLoginAction = () => {
    return {
        type: LOGIN
    };
}

const setLogoutAction = () => {
    return {
        type: LOGOUT
    };
}

export {setLoginAction, setLogoutAction}