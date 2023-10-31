// CustomNavLink.js

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="normal-case font-normal mx-5"
      activeClassName="active-link"
    >
      {children}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default CustomNavLink;
