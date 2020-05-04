import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import Paperbase from "./paperbase/Paperbase";
class App extends Component {
  render() {
    return (
      <div>
        {/*<NavBar />*/}
        {/*<CourseList />*/}
        <Paperbase />
      </div>
    )
  }
}
export default App
//npm i @material-ui/icons
//yarn add @material-ui/icons
