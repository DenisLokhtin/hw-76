import axios from "axios";

export const AUTHOR_CHANGE = 'AUTHOR_CHANGE';
export const TEXT_CHANGE = 'TEXT_CHANGE';
export const POSTS_SET = 'POSTS_SET';

export const authorChange = value => ({type: AUTHOR_CHANGE, payload: value});
export const textChange = value => ({type: TEXT_CHANGE, payload: value});
export const postsSet = value => ({type: POSTS_SET, payload: value});

export const addPost = (text, author) => {
    return async (dispatch) => {
        try {
            const data = {
                "message": text,
                "author": author
            };
            await axios.post('http://localhost:8005/message', data);
            dispatch(textChange(''));
        } catch (e) {
            console.log(e.response.data);
            alert(e.response.data.error);
        }
    };
};

export const getData = (posts, interval) => {
    return async (dispatch) => {
        try {
            let data = null;
            if (posts.length > 0) {
                data = await axios.get('http://localhost:8005/message' + '?datetime=' + posts[posts.length - 1]['datetime'])
            } else {
                data = await axios.get('http://localhost:8005/message')
            }
            if (data.data.length > 0) {
                dispatch(postsSet(data.data));
                clearInterval(interval)
            }
        } catch (e) {
            console.log(e);
        }
    }
};