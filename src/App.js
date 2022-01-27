import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import MainContext from "./context/MainContext";

import TopHeader from "./components/TopHeader";
import Modal from "./components/Modal";

import CreatePost from "./pages/CreatePost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainShowPosts from "./pages/MainShowPosts";
import Start from "./pages/Start";



function App() {

    const [location, setLocation]=useState('/');
    const [modal, setModal]=useState(false);

    const [users, setUsers]=useState([
        {name:'Linas', pass:'abc'},
        {name:'Tomas', pass:'abc'},
        {name:'Laura', pass:'abc'},
        {name:'Rita', pass:'abc'}
    ]);
    const [currentUser, setCurrentUser]=useState('');
    const [posts, setPosts]=useState([
        {
            "title": "tomo",
            "text": "Gerai apgalvotos architektūros pasekmė – gausiai sklindanti natūrali šviesa, todėl dirbtinio apšvietimo namuose reikia tik tamsiuoju paros metu. Beveik visi šviestuvai sieniniai arba lokalūs. Kaip sako projekto autorė, lubas „plaunanti“ šviesa daug malonesnė nei tiesioginė, nukreipta žemyn, o dailius kabančius gaubtus ji vadina namų šeimininkės kūrybos ir išrankumo nuopelnu.",
            "creator": "Tomas",
            "id": 1,
            "liked": [],
            "comments":[],
        },
        {
            "title": "Ekonomistai: laikinas PVM sumažinimas laukiamo efekto neduos",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Tomas",
            "id": 2,
            "liked": [],
            "comments":[]
        },
        {
            "title": "VSAT: pastarąją parą į Lietuvą neįleisti keturi migrantai, vienas priimtas",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Linas",
            "id": 3,
            "liked": [],
            "comments":[]
        },
        {
            "title": "darbdaviai – kas motyvuoja darbinti žmones su negalia?",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! ",
            "creator": "Linas",
            "id": 4,
            "liked": [],
            "comments":[]
        },
        {
            "title": "Vaikai gamtoje atranda geresnį ryšį nei WiFi",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Rita",
            "id": 5,
            "liked": [],
            "comments":[]
        },
        {
            "title": "Paaiškėjo 33 nutrūktgalvių komandos, kurios pasiryžo nekasdieniam žiemos nuotykiui",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Rita",
            "id": 6,
            "liked": [],
            "comments":[]
        },
        {
            "title": "lauros",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Laura",
            "id": 7,
            "liked": [],
            "comments":[]
        },
        {
            "title": "Daiktai, kurie padės siekti užsibrėžto tikslo",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorum fugit id maiores, odio officiis quis tempore! Aperiam blanditiis debitis deleniti dolore eaque eligendi incidunt numquam odit perspiciatis quia reiciendis, sed veritatis voluptatibus! Maiores.",
            "creator": "Laura",
            "id": 8,
            "liked": [],
            "comments":[]
        }
    ]);
    const [id, setId]=useState(posts.length);
    const [currentPostId, setCurrentPostId]= useState(0);

    const addComment=(comment)=>{
        setPosts(posts.map((post)=>(post.id===currentPostId)?{...post, comments: [...post.comments, {text:comment, user:currentUser}]}: post));
    }



  return (
    <MainContext.Provider value={{location, setLocation, users, setUsers, currentUser, setCurrentUser, posts, setPosts, id, setId, modal, setModal, addComment, setCurrentPostId}}>
        <BrowserRouter>
            <div className="App">
                <TopHeader/>
                <div className={'flex-background'}>

                    <Routes>
                        <Route path='/' element={<Start/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/create-post' element={<CreatePost/>} />
                        <Route path='/main' element={<MainShowPosts/>} />
                    </Routes>
                    {modal && <Modal/>}
                </div>
            </div>
        </BrowserRouter>
    </MainContext.Provider>

  );
}

export default App;
