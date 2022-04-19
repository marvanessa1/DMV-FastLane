import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
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
        <p>Vanessa Martinez</p>
        <p>Maddy Kimborowicz</p>
        <p>Arya Krishna</p>
        <p>Eileen Mitchell</p>
        <p>Emma Mondul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
