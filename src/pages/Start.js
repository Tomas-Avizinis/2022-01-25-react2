import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import UserCard from "../components/UserCard";

const Start = () => {

    const {users}=useContext(MainContext);

    return (
        <div>
            <h2>start or welcome PAGE</h2>
            <p> Useriai:</p>
            {users.map((u,i) => <UserCard key={i} u={u}/> )}
        </div>
    )
};

export default Start;