import React, {useContext} from 'react';
import MainContext from "../context/MainContext";



const PostCard = ({post}) => {

    const {currentUser, posts, setPosts}=useContext(MainContext);

    const like=(id)=>setPosts(posts.map((post)=>(post.id===id)?{...post, liked: [...post.liked, currentUser]}: post));
    const dislike=(id)=>setPosts(posts.map((post)=>(post.id===id)?{...post, liked: post.liked.filter(x=>x!==currentUser)}: post));
    //dar galima kazkaip perrasyti trumpiau

    return (

        <div className={'post-card'}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <p>{post.creator}</p>
            <p>Likes: {post.liked.length}</p>
            <p > Liked by:
                {post.liked.map((usr,i)=><span key={i}>{usr}, </span>)}
            </p>

            {(currentUser!==post.creator && currentUser!=='') &&
            <>
                {!post.liked.includes(currentUser) && <button onClick={() => (like(post.id))}>Like</button>}
                {post.liked.includes(currentUser) && <button onClick={() => (dislike(post.id))}>Dislike</button>}
            </>}
        </div>
    );
};

export default PostCard;