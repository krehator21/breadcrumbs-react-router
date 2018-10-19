import React from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export const Forside = (props) => {

  return (<div>
  <h1>Choose an option</h1>
  <Link to="/saksliste">
  <Button onClick={() => props.addToNavBar('/saksliste', "Saksliste")}>Saksliste</Button>
  </Link>
  </div>)
};
