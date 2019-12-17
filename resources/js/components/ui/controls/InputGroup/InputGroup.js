import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const InputGroup = ({ type, label, field, value, errors, onChange, onBlur }) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <input 
                type={type}
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={classnames('form-control', { 'is-invalid': !!errors.length })} />

            {!!errors.length &&
                <div className="invalid-feedback">{errors}</div>
            }
        </div>
    );
}

// TextFieldGroup.propTypes = {
//     field: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     error: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     onBlur: PropTypes.func
// }

// TextFieldGroup.defaultProps = {
//     type: 'text'
// }

export default InputGroup;