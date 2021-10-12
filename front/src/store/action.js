import axios from "axios";

export const AUTHOR_CHANGE = 'AUTHOR_CHANGE';
export const TEXT_CHANGE = 'TEXT_CHANGE';
export const POSTS_SET = 'POSTS_SET';

export const authorChange = value => ({type: AUTHOR_CHANGE, payload: value});
export const textChange = value => ({type: TEXT_CHANGE, payload: value});
export const postsSet = value => ({type: POSTS_SET, payload: value});

export const send = (message) => {
  return async dispatch => {
      const response = await axios.post('http://localhost:8000/message', ...message);
      dispatch(textChange(''))
  }
};

export const get = (message) => {
    return async dispatch => {
        const response = await axios.get('http://localhost:8000/message');
    }
};