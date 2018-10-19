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
        <Link to={{pathname: `/sak/${sak.id}`,
            state: {sak}}}>
            <button
                className="sak-button"
                onClick={() => props.addToNavBar(`/sak/${sak.id}`, `Sak - ${sak.id}`)}>
                sak - {sak.id}
                </button>
        </Link>
    );
  });

  return (
      <div>
  <h1>Saker: </h1>
    <div className="saksliste">
      {caseListLinks}
  </div>
      </div>)
}
