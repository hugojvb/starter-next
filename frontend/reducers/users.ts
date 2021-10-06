import { CREATE_USER } from "../actions/types";

interface State {
	users: any;
}

const INITIAL_STATE: State = { users: [] };

export default function users(
	state: State = INITIAL_STATE,
	action: { type: string; payload: any }
) {
	switch (action.type) {
		case CREATE_USER: {
			return {
				users: { ...state, users: state.users },
			};
		}
		default: {
			return state;
		}
	}
}
