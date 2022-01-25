import React, {useContext, useRef, useState} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const usrName=useRef();
    const usrPass=useRef();
    const nav=useNavigate();


    const {users, setCurrentUser, setLocation}=useContext(MainContext);

    const loginUser=()=>{
        if (users.some((u)=>u.name===usrName.current.value)) {
            console.log('labas', usrName.current.value);
            console.log('index', users.findIndex(u=>u.name===usrName.current.value));
            if (users[users.findIndex(u=>u.name===usrName.current.value)].pass===usrPass.current.value ) {
                console.log('slaptazodis tinka')
                setCurrentUser(usrName.current.value);
                setLocation('/main');
                nav('/main');
            } else console.log('slaptazodis blogas')
        } else console.log('nezinau tokio vartotojo')
    }

    return (
        <div>
            <h2>login PAGE</h2>
            <div className={'flex-col'}>
                <input type="text" ref={usrName} placeholder={'Name'}/>
                <input type="password" ref={usrPass} placeholder={'password'}/>
                <button type="submit" onClick={()=>{loginUser()}}>Login</button>
            </div>
        </div>
    );
};

export default Login;