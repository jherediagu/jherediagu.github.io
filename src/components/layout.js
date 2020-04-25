import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import GatsbyConfig from '../../gatsby-config';

import './layout.css';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>{GatsbyConfig.siteMetadata.title}</title>
      <meta name='description' content={GatsbyConfig.siteMetadata.description} />
    </Helmet>
    <div className='layout'>
      <main>{children}</main>
      <footer>
        <hr></hr>
        <span>{`< />`} code is art.</span>
      </footer>
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
