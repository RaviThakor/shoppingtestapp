import { GET_USERS_LIST } from './types';

const initialState = { users: [] };

const userReducer = (data = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_USERS_LIST:
			return { ...data, users: payload };

		default:
			return { ...data };
	}
};

export default userReducer;