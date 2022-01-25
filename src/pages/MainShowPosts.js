import React, {useContext} from 'react';
import UserCard from "../components/UserCard";
import PostCard from "../components/PostCard";
import MainContext from "../context/MainContext";

const MainShowPosts = () => {

    const {posts}=useContext(MainContext);

    return (

        <div>
            <h2>show posts PAGE</h2>
            {posts.map((p,i) => <PostCard key={i} post={p}/> )}
        </div>
    );
};

export default MainShowPosts;