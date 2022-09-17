import { useEffect, useState } from "react";
import Alert from "../Components/Alert";

function FirstAuthView() {

  const [signupView, loadSignupView] = useState(null);
  const [loginView, loadLoginView] = useState(null);

  const [alert, setAlert] = useState(null);

  function SignupFormSubmit(){
    const form = document.querySelector('.firstAuthView-forms.signup form');

    const username = document.querySelector('#username');
    const repeatUsername = document.querySelector('#username-r');

    const password = document.querySelector('#password');
    const repeatPassword = document.querySelector('#password-r');

    if(username.value!=repeatUsername.value){
        username.setCustomValidity(`Usernames don't match`);
        username.reportValidity();
        return;
    } else {
        username.setCustomValidity('');
        username.reportValidity();
    }

    if(password.validity.patternMismatch){
        password.setCustomValidity('Your password is not secure enough: It must contain atleast 1 lower case, 1 upper case letters, 1 number and 8 characters in total');
        password.reportValidity();
        return;
    } else {
        password.setCustomValidity('');
        password.reportValidity();
    }

    if(password.value!=repeatPassword.value){
        password.setCustomValidity(`Passwords don't match`);
        password.reportValidity();
        return;
    } else {
        password.setCustomValidity('');
        password.reportValidity();
    }
    
    if(form.reportValidity()){
      setAlert('Signup succesful! Please log in with the credentials now')
      setTimeout(() => {
        form.submit();
      }, 5000);
    }
  }

  function LoginFormSubmit(){
    const form = document.querySelector('.firstAuthView-forms.login form');

    form.submit();
  }

  function Load(){
    if(signupView!=null){
      return(
        <div className="firstAuthView-forms signup">
          <h2>Signup form</h2>
          <form method="post" action="http://localhost:8080/signup">
            <div className="username-inputs">
              <label htmlFor='username'>Username:</label>
              <input type={'text'} id='username' name="username" required minLength={1}></input>
              <label htmlFor='username-r'>Repeat username:</label>
              <input type={'text'} id='username-r' name="repeatUsername" required minLength={1}></input>
            </div>
            <div className="password-inputs">
              <label htmlFor='password'>Password:</label>
              <input type={'password'} id='password' name="password" required minLength={4}></input>
              <label htmlFor='password-r'>Repeat password:</label>
              <input type={'password'} id='password-r' name="repeatPassword" required minLength={4}></input>
            </div>
            <button type="button" onClick={()=>{SignupFormSubmit()}}>Register</button>
          </form>
          <button onClick={()=>{loadSignupView(null)}}>Go back from signup</button>
          {alert ? <Alert message={alert} setAlert={{setAlert}}/> : null}
        </div>
      )
    } else if(loginView!=null){
      return(
        <div className="firstAuthView-forms login">
          <h2>Login form</h2>
          <form method="post" action="http://localhost:8080/login">
            <div className="username-inputs">
              <label htmlFor="username">Username:</label>
              <input type={'text'} id='username' name="username" required></input>
            </div>
            <div className="password-inputs">
              <label htmlFor="password">Password:</label>
              <input type={'password'} id='password' name="password" required></input>
            </div>
            <button type="button" onClick={()=>{LoginFormSubmit()}}>Login</button>
          </form>
          <button onClick={()=>{loadLoginView(null)}}>Go back from login</button>
        </div>
      )
    } else if(signupView==null && loginView==null){
      return(
        <div className="FirstAuthView">
          <h2>Learn data structures, algorithms, javascript methods and more!</h2>
          <div className="FirstAuthView-buttons-div">
            <button onClick={()=>{loadLoginView(true)}}>Login</button>
            <button onClick={()=>{loadSignupView(true)}}>Signup</button>
          </div>
        </div>
      )
    }
    }

  return (
    Load()
  )
}

export default FirstAuthView;
