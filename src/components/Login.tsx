import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { login } from '../db-utils';

export const Login = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (res: any) => {
    console.log(`Encoded JWT ID token: + ${res.credential}`);
    const userObject: any = jwtDecode(res.credential);
    console.log(userObject);
    const { given_name, email, picture } = userObject;
    const user = {
      name: given_name,
      email,
      picture,
      token: res.credential,
    };
    console.log(user);
    setUser(user);
    login(user);
  };

  const handleSignOut = (e) => {};

  useEffect(() => {
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
      <div id="signInDiv" hidden={user === null ? true : false}></div>
      <button hidden={user === null ? false : true} onClick={handleSignOut}>
        Sign out
      </button>
      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};
