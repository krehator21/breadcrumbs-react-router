import React from 'react';
import {Button} from 'semantic-ui-react';

export const Sak = ({match}, props, ) => {
  console.log('The ide(a) is  ' + JSON.stringify(props));

  let id = match.params.id
    const { details } = props.location.state;

  return (<div>
  <h1>Processing sak {details.sak.id} of type {details.sak.description}</h1>
    <Button onClick={() => alert("Hooray, party at Neil's house and the offial color is yellow!!!!!!!")}>{details.sak.id}</Button>
  </div>)
};
