import React from 'react';

export const Sak = (props) => {
  console.log('The ide(a) is  ' + JSON.stringify(props));

  let id =props.match.params.id;
  const details  = props.location.state;

  return (<div>
  <h1>Processing sak {details.id} of type {details.description}</h1>
    <button
        className="sak-button"
        onClick={() => alert('Sak ' + details.id + '-' + details.description + ' processed')}>
        Process {id}
        </button>
  </div>)
};
