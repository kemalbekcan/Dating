import { ADD_ROUTE } from './taskTypes';
const initialState = {
  router: {
    name: 'sad',
  },
};
const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROUTE:
      return {
        ...state,
        router: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
};
export default routeReducer;
