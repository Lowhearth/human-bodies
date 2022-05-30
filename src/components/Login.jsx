import './Login.css';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { login } from '../db-utils';
import GoogleUserProfile from './GoogleUserProfile';


export const Login = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (res) => {
    console.log(`Encoded JWT ID token: + ${res.credential}`);
    const userObject = jwtDecode(res.credential);
    console.log(userObject);
    const { given_name, email, picture } = userObject;
    const user = {
      name: given_name,
      email,
      picture,
      token: res.credential,
    };
    console.log(user);
    localStorage.setItem('email', user.email);
    setUser(user);
    login(user);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
    window.location.reload();
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '643894233639-o71huheufn7hetrp58r3euaeloa9l1ov.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <>
      <div
        className="google-login-btn"
        id="signInDiv"
        hidden={localStorage.getItem('email') === null ? false : true}
      ></div>
      <button
        className="sign-out-btn"
        hidden={localStorage.getItem('email') ? false : true}
        onClick={handleSignOut}
      >
        Sign out
      </button>
      {localStorage.getItem('email') && (
        <GoogleUserProfile
          name={user.name}
          picture={user.picture}
        ></GoogleUserProfile>
      )}
    </>
  );
};
