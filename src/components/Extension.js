import React from 'react'
import "../css/extension.css"
import chromeImage from "../images/logo-chrome.svg";
import firefoxImage from "../images/logo-firefox.svg";
import operaImage from "../images/logo-opera.svg";




const Extension = () => {
    return (
        <div className = 'extension'>
            <div className="extension__container">
                <div className="extension__top">
                    <h3>Download the extension</h3>
                    <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                </div>
                <div className="extension__bottom">
                    <div className="extension__bottom__container">
                        <div className="extension__chrome">
                            <img className="extension__browser__image" src = {chromeImage} alt = 'chrome'/>
                            <h5 className = 'extension__browser__title'>Add to Chrome</h5>
                            <p className = 'extension__browser__info'>Minimum version 62</p>
                            <div className="dotted"></div>
                            <button className="add__extension__btn">Add & Install Extension</button>
                        </div>
                        <div className="extension__firefox">
                            <img className="extension__browser__image" src = {firefoxImage} alt = 'chrome'/>
                            <h5 className = 'extension__browser__title'>Add to Firefox</h5>
                            <p className = 'extension__browser__info'>Minimum version 55</p>
                            <div className="dotted"></div>
                            <button className="add__extension__btn">Add & Install Extension</button>
                        </div>
                        <div className="extension__opera">
                            <img className="extension__browser__image" src = {operaImage} alt = 'chrome'/>
                            <h5 className = 'extension__browser__title'>Add to Opera</h5>
                            <p className = 'extension__browser__info'>Minimum version 46</p>
                            <div className="dotted"></div>
                            <button className="add__extension__btn">Add & Install Extension</button>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Extension
