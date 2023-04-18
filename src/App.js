import { Component } from "react";
import './App.css';
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
class App extends Component{
  render(){
    return(
      <>
      <Navbar />
      <Resume />
      </>
    );
  }
}
export default App;