import React, {useContext, useState} from 'react';
import MainContext from "../context/MainContext";
import Modal from "./Modal";



const PostCard = ({post}) => {

    const {currentUser, posts, setPosts, modal, setModal, setCurrentPostId}=useContext(MainContext);


    const like=(id)=>setPosts(posts.map((post)=>(post.id===id)?{...post, liked: [...post.liked, currentUser]}: post));
    const dislike=(id)=>setPosts(posts.map((post)=>(post.id===id)?{...post, liked: post.liked.filter(x=>x!==currentUser)}: post));
    //dar galima kazkaip perrasyti trumpiau

    const startComment=(id)=>{
        setModal (true);
        setCurrentPostId(id);
    };

    return (

        <div className={'post-card'}>
            <h3>{post.title}</h3>
            <p className={'author'}>posted by: {post.creator}</p>

            <p className={'post-text'}>{post.text}</p>

            <div className={'flex sp-between'}>
                <p>Likes: {post.liked.length}</p>
                <p>comments: {post.comments.length}</p>
            </div>

            <div > <b>Comments:</b> </div>
            {post.comments.map((com,i)=><div className={'comment'} key={i}><b>{com.user}:</b> {com.text}</div>)}


            <div className={'flex sp-between'}>
                {(currentUser==post.creator || currentUser=='') && <div/>}
                {(currentUser!==post.creator && currentUser!=='') &&
                <>
                    {!post.liked.includes(currentUser) && <button className={'post-btn'} onClick={() => (like(post.id))}>Like</button>}
                    {post.liked.includes(currentUser) && <button className={'post-btn'} onClick={() => (dislike(post.id))}>Dislike</button>}
                </>}
                <button className={'post-btn'} onClick={() => (startComment(post.id))}>Comment</button>
            </div>



        </div>
    );
};

export default PostCard;


// gal veliau panaudosiu, palaikinusiu sarasas
// <p > Liked by: {post.liked.map((usr,i)=><span key={i}>{usr}, </span>)}</p>