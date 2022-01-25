import React, {useEffect} from "react";
import InputForm from "./components/inputForm/inputForm";
import Post from "./components/post/Post";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addPost, authorChange, getData, textChange} from "./store/action";

function App() {
    const dispatch = useDispatch();
    const textMessage = useSelector(state => state.textMessage);
    const authorMessage = useSelector(state => state.authorMessage);
    const posts = useSelector(state => state.posts);

    let interval = null;

    useEffect(() => {
        interval = setInterval(async () => {
            await dispatch(getData(posts, interval));
        }, 2000);
    }, [posts]);


    return (
        <div className="container">
            <div className="inner-container">
                <InputForm
                    setText={(value) => dispatch(textChange(value))}
                    setAuthor={(value) => dispatch(authorChange(value))}
                    add={() => dispatch(addPost(textMessage, authorMessage))}
                    text={textMessage}
                    author={authorMessage}
                />
                <div className="posts">
                    {posts.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                author={post.author}
                                date={post.datetime}
                                text={post.message}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
