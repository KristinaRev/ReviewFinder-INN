import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass';

const Button = (props) => {
    const { size, label } = props;

    return (
        <button className={`Button Button--${size}`}>
            {label}
        </button>
    );
};

Button.propTypes = {
    size: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Button;
