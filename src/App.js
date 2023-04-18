import { Component } from "react";
import './App.css';
import resume from "./components/resume";
import navbar from "./components/navbar";
class App extends Component{
  render(){
    return(
      <>
      <navbar />
      <resume />
      </>
    );
  }
}
export default App;