import { store } from "./store";
import { actions as Assignment } from "./assignment";
const { dispatch } = store;

export const addAssignment = (assignment) => {
  dispatch(Assignment.ADD_ASSIGNMENT(assignment));
};
