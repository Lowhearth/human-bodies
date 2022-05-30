import './GoogleUserProfile.css';
const GoogleUserProfile = ({ picture, name }) => {
  return (
    <div className="user-profile-container">
      <img className="google-pic" alt="user-profile-pic" src={picture}></img>
      <p>{name}</p>
    </div>
  );
};

export default GoogleUserProfile;
