import React from 'react';
import {Paper, HS1, HS2} from './Styles';
import './styles.css';
import pic from '../assets/images/Kim.jpg';


const AboutMe = () => {
  return (

    <>

    <Paper>
        <row>
            <div>
                <HS2>Hi! I'M Kimberly Long and I am an enthusiastic developer!</HS2>
                
            </div>

            <center>
            <img src= {pic} className="kim" alt=""/>

            </center>
            {/* <div class="col-sm-4 col-lg-12 ">
                <button id= "click"  className="devicon-github-original-wordmark colored"></button>
                <button id= "click" className="devicon-linkedin-plain-wordmark"></button>
            </div> */}
        </row>



    </Paper>
      
    </>
  )
}

export default AboutMe;
