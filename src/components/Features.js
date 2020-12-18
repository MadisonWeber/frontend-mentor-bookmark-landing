import React, { useState } from 'react';
import "../css/Features.css";
import tabOneImage from '../images/illustration-features-tab-1.svg';
import tabTwoImage from '../images/illustration-features-tab-2.svg';
import tabThreeImage from '../images/illustration-features-tab-3.svg';
import TabOneInfo from '../components/tabs/TabOneInfo'
import TabTwoInfo from '../components/tabs/TabTwoInfo'
import TabThreeInfo from '../components/tabs/TabThreeInfo'




const Features = () => {


    const [ currentSlide, setCurrentSlide ] = useState(1)



    return (
        <div className = "features">
            <div className="features__top">
                <h2>Features</h2>
                <div className="features__text">
                    Out aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </div>
                <div className="features__button__holder">
                    <button className= {currentSlide === 1 ? "feature-btn btn__active" : "feature-btn"} onClick = {()=> setCurrentSlide(1)}>Simple Bookmarking</button>
                    <button className={currentSlide === 2 ? "feature-btn btn__active" : "feature-btn"} onClick = {()=> setCurrentSlide(2)}>Speedy Searching</button>
                    <button className={currentSlide === 3 ? "feature-btn btn__active" : "feature-btn"} onClick = {()=> setCurrentSlide(3)}>Easy Sharing</button>
                </div>  
            </div>
            <div className="features__tab__container">
                <div className="features__tab__left">
                    <div className="features__blob"></div>
                    {currentSlide === 1 &&  <img src={tabOneImage} alt="mockup" className = 'generic__mockup'/>}
                    {currentSlide === 2 &&  <img src={tabTwoImage} alt="mockup" className = 'generic__mockup'/>}
                    {currentSlide === 3 &&  <img src={tabThreeImage} alt="mockup" className = 'generic__mockup'/>}
                   
                </div>
                <div className="features__tab__right">
                    <div className="tab__right__container">
                        {currentSlide === 1 && <TabOneInfo />}
                        {currentSlide === 2 && <TabTwoInfo />}
                        {currentSlide === 3 && <TabThreeInfo />}
                        <button className="more__info__btn">More Info</button>
                    </div>
                </div>
            </div>    


        </div>
    )
}

export default Features
