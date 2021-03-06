/**
 * React component to render MDL textfield component
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/textfield
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Textfield = (props) => {
  const { id, className, tag, labelText, floatingLabel,
    hasError, ...otherProps } = props;

  const classes = classNames('mdl-js-textfield mdl-textfield', {
    'mdl-textfield--floating-label': floatingLabel,
    'is-invalid': hasError
  }, className);

  return (
    <div className={classes} >
      {React.createElement(
        tag, Object.assign({}, otherProps, {
          id: id,
          className: 'mdl-textfield__input'
        })
      )}
      <label htmlFor={id} className="mdl-textfield__label">{labelText}</label>
    </div>
  );
}

Textfield.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['input', 'textarea']),
  labelText: PropTypes.string,
  floatingLabel: PropTypes.bool,
  hasError: PropTypes.bool
}

Textfield.defaultProps = {
  tag: 'input',
  floatingLabel: true,
  hasError: false
}

export default Textfield;
