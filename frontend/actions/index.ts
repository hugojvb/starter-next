import { CREATE_USER } from "./types";

export const createUser = (user: any) => {
	return {
		type: CREATE_USER,
		payload: user,
	};
};
