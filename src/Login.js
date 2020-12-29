import React  from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
   const [state,dispatch] = useStateValue();


    const signIn=(e)=>{
        auth.signInWithPopup(provider).then(result =>
            {
               dispatch({
                type:actionTypes.SET_USER,
                user : result.user
               })
            })
            .catch((error)=>{
                alert(error.message);
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                  <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
            <h1>
                Sign into Programmer
            </h1>
            <p>programmer.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
