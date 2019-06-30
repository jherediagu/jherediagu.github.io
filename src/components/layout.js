import React from "react";
import PropTypes from "prop-types";

import './layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
    <main>{children}</main>
    <footer>
      <hr></hr>
      <span>{`< />`} code is an art.</span>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
