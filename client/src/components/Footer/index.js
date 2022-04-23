import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 mt-1">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <div className="name_spacing">
        <h4 className="m-0 text-orange">
          Contributors:
        </h4>
        <p><a target="_blank" rel="noreferrer" href ="https://github.com/marvanessa1">Vanessa Martinez</a></p>
        <p><a target="_blank" rel="noreferrer" href ="https://github.com/mkimborowicz">Maddy Kimborowicz</a></p>
        <p><a target="_blank" rel="noreferrer" href ="https://github.com/AryaKris">Arya Krishna</a></p>
        <p><a target="_blank" rel="noreferrer" href ="https://github.com/eileenhlmitchell19">Eileen Mitchell</a></p>
        <p><a target="_blank" rel="noreferrer" href ="https://github.com/emondul">Emma Mondul</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
