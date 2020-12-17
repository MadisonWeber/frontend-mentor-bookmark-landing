import React, { useState } from 'react'
import '../css/FrequentlyAsked.css'


const FrequentlyAsked = () => {

    const [ firstQuestionOpen, setFirstQuestionOpen ] = useState(false);
    const [ secondQuestionOpen, setSecondQuestionOpen ] = useState(false);
    const [ thirdQuestionOpen, setThirdQuestionOpen ] = useState(false);
    const [ fourthQuestionOpen, setFourthQuestionOpen ] = useState(false);

    return (
        <div className = 'freaquentlyAsked'>
            <h3 className = 'freq__title'>Frequently Asked Questions</h3>
            <p className = 'freq__text'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us</p>
            <div className="question__panel">
                <div className="question">
                    <div className="question__container">
                        <p className="question__text">What is a Bookmark?</p>
                        <svg onClick = {()=> setFirstQuestionOpen((p) => !p)}
                        className = {firstQuestionOpen ? 'rotate-svg' : 'none'}
                         xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    </div>
                    {firstQuestionOpen && 
                    <p className="answer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                    }
                </div>
                <div className="question">
                    <div className="question__container">
                        <p className="question__text">How can i request a new browser?</p>
                        <svg  onClick = {()=> setSecondQuestionOpen((p) => !p)} 
                        className = {secondQuestionOpen ? 'rotate-svg' : 'none'}
                        xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    </div>
                    {secondQuestionOpen && 
                    <p className="answer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                    }
                </div>
                <div className="question">
                    <div className="question__container">
                        <p className="question__text">Is there a mobile app?</p>
                        <svg onClick = {()=> setThirdQuestionOpen((p) => !p)}
                        className = {thirdQuestionOpen ? 'rotate-svg' : 'none'}
                         xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    </div>
                    {thirdQuestionOpen &&
                    <p className="answer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                    }
                </div>
                <div className="question">
                    <div className="question__container">
                        <p className="question__text">What about other Chromium Browsers?</p>
                        <svg onClick = {()=> setFourthQuestionOpen((p) => !p)} 
                        className = {fourthQuestionOpen ? 'rotate-svg' : 'none'}
                        xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" /></svg>
                    </div>
                    {fourthQuestionOpen && 
                    <p className="answer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                    }
                </div>
            </div>
            <button className="more__info__btn">More Info</button>
        </div>
    )
}

export default FrequentlyAsked
