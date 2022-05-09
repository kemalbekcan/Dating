import { ADD_ROUTE } from './taskTypes';
export const addRoute = (route) => ({
  type: ADD_ROUTE,
  payload: route,
});
