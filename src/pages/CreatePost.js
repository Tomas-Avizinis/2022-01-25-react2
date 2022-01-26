import React, {useContext, useRef} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";



const CreatePost = () => {

    const title=useRef();
    const text=useRef();

    const nav=useNavigate();

    const {posts, setPosts, currentUser, setLocation, id, setId}=useContext(MainContext);

    const createPost=()=>{
        setId(id+1);
        setPosts([...posts, {
            title: title.current.value,
            text: text.current.value,
            creator: currentUser,
            id: id+1,
            liked:[]
        }]);
        nav('/main');
        setLocation('/main');
    }

    return (
        <div className={'input-box'}>
            <h2>create post </h2>
            <div className={'flex-col'}>
                <input type="text" ref={title} placeholder={'Title'} style={{width:'300px'}}/>
                <input type="text" ref={text} placeholder={'text'} style={{height:'120px', width:'300px'}}/>
                <button type="submit" onClick={()=>{createPost()}}>Create</button>
            </div>

        </div>
    );
};

export default CreatePost;