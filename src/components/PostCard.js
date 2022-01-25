import React from 'react';
import UserCard from "./UserCard";

const PostCard = ({post}) => {
    return (
        <div className={'post-card'}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <p>{post.creator}</p>
        </div>
    );
};

export default PostCard;