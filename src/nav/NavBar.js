import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

export const NavBar = (props) => {

  let content = [];
  for (let i = 0; i < props.nav.length; i++) {
    if (i + 1 === props.nav.length) {
        content.push(<li className={classNames('breadcrumb-item', 'disable-link')} key={i} >
            <NavLink to={props.nav[i][0]} onClick={() => props.rollBackNavBar(i)}>
                {props.nav[i][1]}
            </NavLink>
        </li>);
    } else {
        content.push(<React.Fragment key={i}><li className = "breadcrumb-item">
            <NavLink to={props.nav[i][0]} onClick={() => props.rollBackNavBar(i)}>
                {props.nav[i][1]}
            </NavLink>
        </li>
        </React.Fragment>);
    }
  }

  const viewNavBar = (content.length > props.navBarMinSize);

  if (viewNavBar){
      return (
          <nav>
              <ul className = "breadcrumb" >
                  {content}
              </ul>
          </nav>
      );
  }

  return null;
};
