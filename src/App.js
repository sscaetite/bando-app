import React from "react";
import Home from './pages/home/Home'
import Album from "./pages/album/Album"
import NavBar from "./components/NavBar"
import Members from "./pages/members/Members"
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Route exact path="/album" component={Album}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/members" component={Members}></Route>
      </Router>
    </div>
  )
}

export default App;
