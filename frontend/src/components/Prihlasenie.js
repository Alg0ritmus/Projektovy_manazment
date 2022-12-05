import React, {useState} from 'react';
import '../style/style.css'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import styled from "styled-components"
import { useEffect } from 'react';

export default function Prihlasenie(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginError,setLoginError] = useState(false);
    let registerURL = 'https://tukebook.herokuapp.com/api/login/'
    const navigate = useNavigate()


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit  = () => {
        setLoginError(false)
        var login_data = {
            "password": password,
            "email": email
            };
        axios.post(registerURL, login_data)
        .then(result => {
            if(result.data.registered === true){
                console.log(result)
                // navigate("/main")
            }
            if(result.data.message){
                setLoginError(true)
            }
        })
        .catch(error => console.log('error', error));
    }
    return(
        <div className="loginForm">
          <div className="loginFormBody">
              <div className="email">
                  <input value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" className="form__input" placeholder="Email" />
              </div>
              <div className="password">
                  <input value={password} onChange = {(e) => handleInputChange(e)} className="form__input" type="password"  id="password" placeholder="Heslo" />
              </div>
              {loginError==true? <h1 className='formsErrorMessage'>Chybné prihlasovacie údaje</h1> : ""}
              <a href="#" onClick={()=>handleSubmit()} className="btn btn_prihlasenie">Prihlásiť sa</a>    
              <a className='btn' href="/registracia">Vytvoriť nový účet</a>
          </div>    
      </div>      
    )
}