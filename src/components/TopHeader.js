import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MainContext from "../context/MainContext";

const TopHeader = () => {

    const {location, setLocation, currentUser}=useContext(MainContext);

    return (
        <div className={'top-header'}>
            <Link to="/" onClick={()=>{setLocation('/')}}>Start</Link>
            {(location==='/' || location==='/register') && <Link to='login' onClick={()=>{setLocation('/login')}}>Login</Link>}
            {(location==='/' || location==='/login') && <Link to='register' onClick={()=>{setLocation('/register')}}>Register</Link>}
            {(location==='/main') && <Link to='create-post' onClick={()=>{setLocation('/create-post')}}>Create Post</Link>}
            {(location==='/create-post') && <Link to='main' onClick={()=>{setLocation('/main')}}>Show posts</Link>}

            {(location==='/main' || location==='/create-post') && <p>User: {currentUser}</p>}


        </div>
    );
};

export default TopHeader;