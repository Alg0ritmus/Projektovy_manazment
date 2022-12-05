import React, {useState, useEffect} from 'react';
import Footer from "../components/Footer";
import '../style/style.css'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export default function Registracia(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [dateOfBirth, setateOfBirth] = useState("");
    const [passwordIssue, setpasswordIssue] = useState(false);
    const [registrationErrorMessage, setRegistrationErrorMessage] = useState("")
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "dateOfBirth"){
            setateOfBirth(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        if(firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || dateOfBirth === "" || password!=confirmPassword){
            setpasswordIssue(true)
        }
        else{
            setpasswordIssue(false)
            let registerURL = 'https://tukebook.herokuapp.com/api/registration/'
            
            var raw = {
            "firstName": firstName,
            "lastName": lastName,
            "password": password,
            "email": email,
            "dateOfBirth":dateOfBirth
            
            };

            axios.post(registerURL, raw)
                .then(result => {
                    setRegistrationErrorMessage(result)
                    console.log(result)
                    if(result.data){
                        navigate("/")
                    }
                })
                .catch(error => console.log('error', error));
        }
    }
    return(
        <div className="registrationContainer">
          <div className="registrationFormBody">
              <div className="username">
                  <input value={firstName} onChange = {(e) => handleInputChange(e)} className="form__input register_form_input" type="text" id="firstName" placeholder="Krstné meno" />
              </div>
              <div className="lastname">
                  <input value={lastName} onChange = {(e) => handleInputChange(e)} type="text" id="lastName"  className="form__input register_form_input"placeholder="Priezvisko" />
              </div>
              <div className="email">
                  <input value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" className="form__input register_form_input" placeholder="Email" />
              </div>
              {/* <div className="number">
                  <input value={number} onChange = {(e) => handleInputChange(e)} type="tel" id="number" className="form__input register_form_input" placeholder="Telefónne číslo" name="phone" pattern="[0-9]{10}"  />
              </div> */}
              {/* <div className="country">
                  <input value={country} onChange = {(e) => handleInputChange(e)} type="text" id="country"  className="form__input register_form_input"placeholder="Krajina" />
              </div> */}
              <div className="dateOfBirth">
                  <input value={dateOfBirth} onChange = {(e) => handleInputChange(e)} type="date" id="dateOfBirth"  className="form__input register_form_input"placeholder="Dátum narodenia" />
              </div>
              <div className="password">
                  <input value={password} onChange = {(e) => handleInputChange(e)} className="form__input register_form_input" type="password"  id="password" placeholder="Heslo" />
              </div>
              <div className="confirm-password">
                  <input value={confirmPassword} onChange = {(e) => handleInputChange(e)} className="form__input register_form_input" type="password" id="confirmPassword" placeholder="Potvrď heslo" />
              </div>

              {passwordIssue ? <h1 className='formsErrorMessage'>Musia byť vyplnené všetký údaje a heslá sa musia zhodovať!</h1> : ""}
              {registrationErrorMessage && passwordIssue===false ?  <h1 className='formsErrorMessage'>{(registrationErrorMessage.data.Error)}</h1> : ""}
              <a href='#' onClick={handleSubmit} type="submit" className="btn registrationBtn">Dokončiť registráciu</a>
          </div>
          <Footer />
      </div>  
          
    )
}