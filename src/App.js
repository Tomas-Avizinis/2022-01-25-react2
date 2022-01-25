import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import MainContext from "./context/MainContext";

import TopHeader from "./components/TopHeader";

import CreatePost from "./pages/CreatePost";
import Start from "./pages/Start";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainShowPosts from "./pages/MainShowPosts";


function App() {

    const [location, setLocation]=useState('/');
    const [users, setUsers]=useState([]);
    const [currentUser, setCurrentUser]=useState();
    const [posts, setPosts]=useState([]);


  return (
    <MainContext.Provider value={{location, setLocation, users, setUsers, currentUser, setCurrentUser, posts, setPosts}}>
        <BrowserRouter>
            <div className="App">
                <TopHeader/>
                <Routes>
                    <Route path='/' element={<Start/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/create-post' element={<CreatePost/>} />
                    <Route path='/main' element={<MainShowPosts/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </MainContext.Provider>

  );
}

export default App;
