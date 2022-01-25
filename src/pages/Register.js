import React, {useContext, useRef} from 'react';
import MainContext from "../context/MainContext";

const Register = () => {

    const usrName=useRef();
    const usrPass1=useRef();
    const usrPass2=useRef();

    const {users, setUsers}=useContext(MainContext);

    const addUser = () => {
        console.log('vardas', usrName.current.value);
        if (usrName.current.value<3 || usrName.current.value>10) return
        if (usrPass1.current.value<3 || usrPass1.current.value>10) return
        if (usrPass1.current.value !== usrPass2.current.value) return;

        console.log('Useris', usrName.current.value, 'pridetas. pass: ', usrPass1.current.value);
        setUsers([...users,{name:usrName.current.value, pass: usrPass1.current.value}]);
    }


    return (
        <div>
            <h2>register PAGE</h2>
            <div className={'flex-col'}>
                <input type="text" ref={usrName} placeholder={'Name'}/>
                <input type="password" ref={usrPass1} placeholder={'password'}/>
                <input type="password" ref={usrPass2} placeholder={'repeat password'}/>
                <button type="submit" onClick={()=>{addUser()}}>Register</button>
            </div>
        </div>
    );
};

export default Register;


// <input type="text" ref={usrName} placeholder={'Name'} onChange={instantCheck}  />