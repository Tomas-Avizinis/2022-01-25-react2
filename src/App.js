import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import MainContext from "./context/MainContext";

import TopHeader from "./components/TopHeader";

import CreatePost from "./pages/CreatePost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainShowPosts from "./pages/MainShowPosts";


function App() {

    const [location, setLocation]=useState('/');
    const [users, setUsers]=useState([
        {name:'Linas', pass:'a'},
        {name:'Tomas', pass:'a'},
        {name:'Laura', pass:'a'},
        {name:'Rita', pass:'a'}
    ]);
    const [currentUser, setCurrentUser]=useState('');
    const [posts, setPosts]=useState([
        {
            "title": "tomo",
            "text": "aaaaaaaaaaaaaa",
            "creator": "Tomas",
            "id": 1,
            "liked": []
        },
        {
            "title": "tomo",
            "text": "aaaaaaaaaa",
            "creator": "Tomas",
            "id": 2,
            "liked": []
        },
        {
            "title": "lino",
            "text": "aaaaaaaaaaa",
            "creator": "Linas",
            "id": 3,
            "liked": []
        },
        {
            "title": "Lino",
            "text": "a",
            "creator": "Linas",
            "id": 4,
            "liked": []
        },
        {
            "title": "Rita",
            "text": "aaaaaaaaaaaaaaaaa",
            "creator": "Rita",
            "id": 5,
            "liked": []
        },
        {
            "title": "Rita",
            "text": "aaaaaaaaaaaaaaaaa",
            "creator": "Rita",
            "id": 6,
            "liked": []
        },
        {
            "title": "lauros",
            "text": "aaaaaaaa",
            "creator": "Laura",
            "id": 7,
            "liked": []
        },
        {
            "title": "Lauroa",
            "text": "aaaaaaaaaa",
            "creator": "Laura",
            "id": 8,
            "liked": []
        }
    ]);
    const [id, setId]=useState(posts.length);

  return (
    <MainContext.Provider value={{location, setLocation, users, setUsers, currentUser, setCurrentUser, posts, setPosts, id, setId}}>
        <BrowserRouter>
            <div className="App">
                <TopHeader/>
                <div className={'flex-background'}>

                    <Routes>
                        <Route path='/' element={<MainShowPosts/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/create-post' element={<CreatePost/>} />
                        <Route path='/main' element={<MainShowPosts/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </MainContext.Provider>

  );
}

export default App;
