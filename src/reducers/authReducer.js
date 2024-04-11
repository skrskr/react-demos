import { LOGIN, LOGOUT } from "../types/authType"

export const AuthReducer = (state = { isLoggedIn: false }, action) => {

  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true }
    case LOGOUT:
      return { isLoggedIn: false }
    default:
      return state
  }
}
