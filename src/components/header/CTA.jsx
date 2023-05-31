import React from 'react'
import CV from '../../assets/cv.pdf'
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
   const handleLetsTalk = () => {
    navigate('/chatLobby');
  };
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <button className="btn btn-primary" onClick={handleLetsTalk}>
        Ask Sarah
      </button>
    </div>
  );
}

export default CTA