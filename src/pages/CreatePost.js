import React, {useContext, useRef} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";



const CreatePost = () => {

    const title=useRef();
    const text=useRef();

    const nav=useNavigate();

    const {posts, setPosts, currentUser}=useContext(MainContext);

    const createPost=()=>{
        setPosts([...posts, {
            title: title.current.value,
            text: text.current.value,
            creator: currentUser
        }]);
        nav('/main');
    }

    return (
        <div>
            <h2>create post PAGE</h2>
            <div className={'flex-col'}>
                <input type="text" ref={title} placeholder={'Title'}/>
                <input type="text" ref={text} placeholder={'text'}/>
                <button type="submit" onClick={()=>{createPost()}}>Login</button>
            </div>

        </div>
    );
};

export default CreatePost;