import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsBody from './Components/NewsBody';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      theme:{backgroundColor:"white",color:"black"},
      button_theme:{backgroundColor:"#865DFF",color:"white"}
    }
  }
  changeTheme=()=>{
    if(this.state.theme.color==="black"){
      this.setState({
        theme:{backgroundColor:"#865DFF",color:"white"},
        button_theme:{backgroundColor:"white",color:"#865DFF"}
      })
    }
    else {
      this.setState({
        theme:{backgroundColor:"white",color:"black"},
        button_theme:{backgroundColor:"#865DFF",color:"white"}
      })
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar changeTheme={this.changeTheme} />
        <Routes>
          <Route exact path='/' element={<NewsBody pageSize={9} key="general" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/business' element={<NewsBody pageSize={9} key="business" category="business" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/entertainment' element={<NewsBody pageSize={9} key="entertainment" category="entertainment" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/health' element={<NewsBody pageSize={9} key="health" category="health" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/science' element={<NewsBody pageSize={9} key="science" category="science" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/sports' element={<NewsBody pageSize={9} key="sports" category="sports" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
          <Route exact path='/technology' element={<NewsBody pageSize={9} key="technology" category="technology" country="in" theme={this.state.theme} button={this.state.button_theme} />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
