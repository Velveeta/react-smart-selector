import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../checkbox';
import ManagedGroup from '../managed-group';
import Radio from '../radio';

const SmartSelector = class extends React.Component {
  constructor (...args) {
    super(...args);

    this._onChange = this._onChange.bind(this);
  }

  _onChange (value) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  render () {
    const { multiple, options, value } = this.props;

    let Component = (multiple ? Checkbox : Radio);

    if (options.length) {
      if (options.length <= 5) {
        return (
          <ManagedGroup multiple={multiple} onChange={this._onChange} value={value}>
            {options.map(option => (
              <Component key={option.value} label={option.label} value={option.value} />
            ))}
          </ManagedGroup>
        );
      } else {
        const onChange = e => {
          let values = [];

          Array.prototype.forEach.call(e.target, target => {
            if (target.selected) {
              values.push(target.value);
            }
          })

          if (!values.length) {
            values = null;
          }

          this._onChange(values);
        };

        let styles = {};

        if (multiple) {
          styles = {
            height: '145px',
          };
        }

        return (
          <select multiple={multiple} onChange={onChange} style={styles} value={value}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        );
      }
    } else {
      return null;
    }
  }
};

SmartSelector.defaultProps = {
  options: [],
};
SmartSelector.displayName = 'SmartSelector';
SmartSelector.propTypes = {
  onChange: PropTypes.func,
};

export default SmartSelector;
