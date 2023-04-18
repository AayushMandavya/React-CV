import { Component } from "react";
import '../assets/css/resume.css';
import aayush from '../assets/images/aayush.jpg';
class resume extends Component{
    render(){
        return(
            <>
            <div className="resume">
                <div className="reume__logo">
                    <img src={aayush} alt=""/>
                </div>
                <div className="resume_desc">
                <p>
                    asdasdasdadasdkjsahdlkashdklhasdhasdha
                    khasdjhasldhalskdksahdakshdlasdhaskdhalsd
                </p>
                <p>
                    asdasdasdadasdkjsahdlkashdklhasdhasdha
                    khasdjhasldhalskdksahdakshdlasdhaskdhalsd
                </p>

                <button className="resume__btn">
                    Download CV
                </button>
                </div>
            </div>

            </>
        );
    }
}

export default resume;