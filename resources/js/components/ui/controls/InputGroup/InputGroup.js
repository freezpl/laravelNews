import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const InputGroup = ({ type, label, field, value, errors, loader, onChange }) => {

    function renderLoader(loader) {
        if (loader)
            return (<div className="col-sm-1">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>);
    }


    return (
        <div className="form-group row">
            <label htmlFor={field} className="col-sm-2">{label}</label>
            <input
                type={type}
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                className={classnames('form-control', 'col-sm-9', { 'is-invalid': !!errors.length })} />
            {renderLoader(loader)}
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