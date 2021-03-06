import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MainContext from "../context/MainContext";

const TopHeader = () => {

    const {location, setLocation, currentUser, setCurrentUser}=useContext(MainContext);

    return (
        <div className={'top-header'}>

            <div className={'header-flex'}>
                {(location==='/' || location==='/register') && <Link to='login' onClick={()=>{setLocation('/login')}}>Login</Link>}
                {(location==='/' || location==='/login') && <Link to='register' onClick={()=>{setLocation('/register')}}>Register</Link>}
                {(location==='/main') && <Link to='create-post' onClick={()=>{setLocation('/create-post')}}>Create Post</Link>}
                {(location==='/create-post') && <Link to='main' onClick={()=>{setLocation('/main')}}>Show posts</Link>}
            </div>

            <div className={'header-flex'}>
                <p>hello: <b>{currentUser? currentUser:'guest'}</b></p>
                {location!=='/' && <Link to="/" onClick={() => {setLocation('/');setCurrentUser('')}}>{currentUser===''? 'start page': 'Log out'}</Link>}
            </div>



        </div>
    );
};

export default TopHeader;

// (location==='/main' || location==='/create-post') &&