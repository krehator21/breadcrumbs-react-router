import React from 'react'
import {Link} from 'react-router-dom'

export const Saksliste = (props) => {

  const caseList = [
      {
        id: '20181000',
          description: 'Salgspant'
      },
      {
        id: '20181003',
          description: 'Abandonering'
      },
      {
        id: '20182009',
          description: 'Pantrett'
      },
      {
        id: 20182099,
          description: 'Pantheftelse'
      }];

  const caseListLinks = caseList.map((sak) => {
    return (
        <Link to={
            {pathname: '/saksliste/sak/' + sak.id,
            state:
                {id: sak.id,
                    description: sak.description
            }
            }} key={sak.id}>
            <button
                className="sak-button"
                onClick={() => props.addToNavBar('/saksliste/sak/' + sak.id, 'Sak - ' + sak.id)}>
                sak - {sak.id}
                </button>
        </Link>
    );
  });

  return (
      <div>
  <h1>Select sak: </h1>
    <div className="saksliste">
      {caseListLinks}
  </div>
      </div>)
};
