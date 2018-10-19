import React from 'react'
import {Breadcrumb} from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import classNames from 'classnames';

const NavBar = (props) => {

  let content = [];
  let olContent = [];
  for (let i = 0; i < props.nav.length; i++) {
    if (i + 1 === props.nav.length) {
      content.push(
          <Breadcrumb.Section
          as={NavLink}
          key= {i}
          onClick={() =>  props.rollBackNavBar(i)} to={props.nav[i][0]}>{props.nav[i][1]}
          </Breadcrumb.Section>);
        olContent.push(<li className={classNames('breadcrumb-item', 'disable-link')} key={i} >
            <Link to={props.nav[i][0]} onClick={() => props.rollBackNavBar(i)}>
                {props.nav[i][1]}
            </Link>
        </li>);
    } else {
      content.push(
          <React.Fragment key={i}>
              <Breadcrumb.Section
                  as={NavLink}
                  onClick={() => props.rollBackNavBar(i)} to={props.nav[i][0]}>{props.nav[i][1]}
                  </Breadcrumb.Section>
              <Breadcrumb.Divider />
          </React.Fragment>);
        olContent.push(<React.Fragment key={i}><li className = "breadcrumb-item">
            <Link to={props.nav[i][0]} onClick={() => props.rollBackNavBar(i)}>
                {props.nav[i][1]}
            </Link>
        </li>
        </React.Fragment>);
    }
  }


return (
    <nav>
        <ul className = "breadcrumb" >
            {olContent}
        </ul>
        <Breadcrumb size="massive"> {content}</Breadcrumb>
    </nav>)
};

export default NavBar
