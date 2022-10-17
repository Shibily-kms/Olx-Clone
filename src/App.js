import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'

function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user.multiFactor.user)
    })
  })

  return (

    <BrowserRouter>
      <Post>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/product/view' element={<View />} />
        </Routes>
      </Post>
    </BrowserRouter>

  );
}

export default App;
