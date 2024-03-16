import React from "react";
import { useState } from "react";



const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);



    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordValid(e.target.value.length >= 8);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordValid(e.target.value === password);
    }

    // email validate check karega
    const validateEmail = (email) => {
        const specialChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return specialChar.test(email);
    }


    const handleSumit = (e) => {
        e.preventDefault();

        if(emailValid && passwordValid && confirmPasswordValid) {
            alert("Form submitted successfully")
        }  else {
            alert('Can’t submit the form');
        }
    }


    return(
        <div className="container">
            <form onSubmit={handleSumit}>
                <div>
                    <label>Email:</label>
                    <br></br>
                    <input type="email" 
                    value={email} 
                    onChange={handleEmail}
                    style={{border: emailValid ? '2px solid green' : '2px solid red' }}
                    />
                    {!emailValid && <p style={{color: "red"}}>Invalid email format</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <br></br>
                    <input type="password" 
                    value={password} 
                    onChange={handlePassword}
                    style={{border: passwordValid ? '2px solid green' : '2px solid red'}}
                    />
                    {!passwordValid && <p style={{color: "red"}}>Password must be at least 8 characters long</p>}
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <br></br>
                    <input type="password" 
                    value={confirmPassword} 
                    onChange={handleConfirmPassword}
                    style={{border: confirmPasswordValid ? '2px solid green' : '2px solid red'}}
                    />
                    {!confirmPasswordValid && <p style={{color: "red"}}>Passwords do not match</p>}
                </div>

                <button type="sumit" >Sign Up</button>

            </form>
        </div>
    )
}

export default Form;