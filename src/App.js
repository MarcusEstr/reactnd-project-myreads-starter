import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/MainPage'
import SearchPage from './components/pages/SearchPage'

class BooksApp extends React.Component {

  render() {
    return(
      <div>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    )
  }
}

export default BooksApp
