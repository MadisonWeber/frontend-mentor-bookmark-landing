import React, { useState } from 'react'
import "../css/Subscribe.css"

const Subscribe = () => {


    const [ email, setEmail ] = useState('')
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        var re = /\S+@\S+\.\S+/;
        let emailOk = re.test(email);
        if(emailOk){
            setEmail('')
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div className = 'subscribe'>
            <div className="subscribe__container">
                <span className="already-joined">35,000+ already joined</span>
                <h2 className = 'subscribe__title'>Stay up-to-date with what we're doing</h2>
                <form className = 'subscribe-form' onSubmit = {handleSubmit} onFocus = {() => setError(false)}>
                    <div className="input__container">
                        <input type="text" placeholder= 'Enter your email address' value = {email} onChange = {(e)=> setEmail(e.currentTarget.value)} className = {error ? 'error-border' : 'none'}/>
                        {error && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg> }
                        {error && <p className = 'form-error-message'>Whoops, make sure it's an email</p>} 
                    </div>
                    <button className = 'contact-us'>Contact Us</button>
                </form>

            </div>
            
        </div>
    )
}

export default Subscribe
