import { useState } from 'react';
import './BodyLikes.css';

export const BodyLikes: React.FC = () => {
  const [likesCounter, setLikesCounter] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const handleClick = () => {
    setLiked(!liked);
    setLikesCounter(likesCounter + 1);
  };

  return (
    <div
      onClick={() => setLikesCounter(likesCounter + 1)}
      className="likes-counter-container"
    >
      {/* <div className="likes-counter-cyrcle"></div> */}
      <p>{likesCounter}</p>
      <button
        onClick={() => setLiked(!liked)}
        className={`like-button ${liked ? 'liked' : ''}`}
      ></button>
    </div>
  );
};
