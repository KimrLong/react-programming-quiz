import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Yellow from '../../assets/images/edu-lauton-TyQ-0lPp6e4-unsplash.jpg';
import '../../components/styles.css'




const BaseLayout = (props) => {
  return (
    <>
    <img className="bg-img" src={Yellow} alt="logo"/>
    <Header/><br/>
       {props.children}
    <Footer/>
    </>
  )
}

export default BaseLayout;

