import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";


/**
 * It takes in a dispatch function and a user object, and then dispatches an action to the reducer.
 * @param dispatch - The dispatch function from Redux.
 * @param user - {
 */
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFailure())
    }
} 