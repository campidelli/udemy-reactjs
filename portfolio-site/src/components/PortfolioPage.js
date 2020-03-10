import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    Check out the following things I have done:
    <ul>
      <li>
        <Link to="/portfolio/1" activeClassName="is-active">Item 1</Link>
      </li>
      <li>
        <Link to="/portfolio/2" activeClassName="is-active">Item 2</Link>
      </li>
    </ul>
  </div>
);

export default PortfolioPage;
