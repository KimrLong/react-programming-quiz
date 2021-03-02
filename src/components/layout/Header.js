import React from 'react'
import{Link} from 'react-router-dom';
import {Nav} from '../../components/Styles';


const Header = () => {
  return (
    <>
        <Nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" style={{ color: '#2e294e' }} to="/"><strong>HOME</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" style={{ color: '#2e294e' }} to="/aboutme"><strong>ABOUT ME</strong></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{ color: '#2e294e' }} to="/quiz"><strong>QUIZ</strong></Link>
                </li>
            </ul>
        </div>
        </Nav>
    </>
    )
}

export default Header;
