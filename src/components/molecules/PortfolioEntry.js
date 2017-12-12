import React from 'react';

const PortfolioEntry = ({ title, children }) => {
  return (
    <section>
      <div className="content">
        <header>
          <h2 className="subtitle">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}

export default PortfolioEntry;
