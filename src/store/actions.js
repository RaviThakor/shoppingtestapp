import { GET_USERS_LIST } from './types';
import axios from 'axios';

export const getUsersList = () => async (dispatch) => {
    try {
        let response = await axios.get('https://api.github.com/users?per_page=21');

        if (response.status === 200) {
            dispatch({
                type: GET_USERS_LIST,
                payload: response.data,
            });
        }
    } catch(error) {
        console.log('error : ', error);
    }
}
