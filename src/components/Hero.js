import React from 'react'
import '../css/Hero.css'
import HeroImage from '../images/illustration-hero.svg'

const Hero = () => {
    return (
        <div className = 'hero'>
            <div className="hero__left">
                <div className="hero__left__container">
                    <h1 className="hero__left__title">A Simple Bookmark Manager</h1>
                    <p className="hero__left__text">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="hero__left__button__container">
                        <button className="hero__button__chrome heroleftbtn">Get it on Chrome</button>
                        <button className="hero__button__firefox heroleftbtn">Get it on Firefox</button>
                    </div>
                </div> 
            </div>
            <div className="hero__right">
                <img src={HeroImage} alt="hero"/>
                <div className="hero__right__blue-blob"></div>
            </div>
        </div>
    )
}

export default Hero
