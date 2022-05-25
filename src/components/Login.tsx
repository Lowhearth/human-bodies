import { GoogleLogin } from 'react-google-login';

// const storeUser = async () => {
//   const res = await fetch('localhost:4000/')
// }

export const Login = () => {
  const handleLogin = async (googleData: any) => {
    console.log(googleData);
    const res = await fetch('http://localhost:4000/api/v1/auth/google', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <GoogleLogin
      clientId={
        '643894233639-skca1e21pcijf4te8rvl2srjmc4167i6.apps.googleusercontent.com'
      }
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
};
