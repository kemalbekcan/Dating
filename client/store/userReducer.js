import { ADD_USER } from './taskTypes';
const initialState = {
  currentUser: {},
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log('user', action)
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
