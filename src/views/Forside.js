import React from 'react';
import {Link} from 'react-router-dom';

export const Forside = (props) => {

  return (<div>
  <h1>Choose an option</h1>
  <Link to="/saksliste">
  <button className="sak-button"
          onClick={() => props.addToNavBar('/saksliste', "Saksliste")}>Saksliste >></button>
  </Link>
  </div>)
};
