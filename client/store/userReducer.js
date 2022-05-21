import { ADD_USER } from './taskTypes';
const initialState = {
  user: {},
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
