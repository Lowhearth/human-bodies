import { GoogleLogin } from 'react-google-login';

export const Login: React.FC = () => {
  const handleLogin = async (googleData: any) => {
    const res = await fetch('/api/v1/auth/google', {
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
      clientId={'rellenar con google id'}
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
};
