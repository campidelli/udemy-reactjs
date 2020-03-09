import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    Check out the following things I have done:
    <ul>
      <li>
        <NavLink to="/portfolio/1" activeClassName="is-active">Item 1</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio/2" activeClassName="is-active">Item 2</NavLink>
      </li>
    </ul>
  </div>
);

export default PortfolioPage;
