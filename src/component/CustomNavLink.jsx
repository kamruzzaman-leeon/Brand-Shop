import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const CustomNavLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active font-bold btn-square underline underline-offset-[14px] decoration-2"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
          {children}
        </NavLink>
    );
};

CustomNavLink.propTypes={
    to: PropTypes.string,
    children: PropTypes.string
}

export default CustomNavLink;