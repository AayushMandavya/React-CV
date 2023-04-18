import { Component } from "react";
import '../assets/css/navbar.css';
class navbar extends Component{
    render(){
        return(
<>
<div className="NavBar">
        <h3>RESUME</h3>
        <ul className="NavBar__links">
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>SKILL</li>
          <li>EDUCATION</li>
          <li>CONTACT</li>
          <li>BLOG</li>
        </ul>
      </div>
</>
        );
    }
}

export default navbar;