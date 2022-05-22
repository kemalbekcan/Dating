import { ADD_USER } from './taskTypes';
import axios from 'axios';

export const addUser = (user) => (dispatch) => {
  dispatch({ type: ADD_USER, payload: user.email });
};
