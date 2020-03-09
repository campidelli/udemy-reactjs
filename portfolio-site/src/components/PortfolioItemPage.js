import React from 'react';

const PortfolioItemPage = (props) => {
  return (
    <div>
      <h1>Portfolio Item</h1>
      This is the item number {props.match.params.id} of my works.
    </div>
  );
};

export default PortfolioItemPage;
