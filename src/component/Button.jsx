import React from 'react';
import PropTypes from 'prop-types';
const Button = ({children}) => {
    return (
        
             <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white ">{children}</button>
        
    );
};
Button.propTypes={
    
    children: PropTypes.string
}

export default Button;