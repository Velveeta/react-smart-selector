import React from 'react';

const getIndexOfValue = (currentValue, searchValue) => {
  if (!currentValue) {
    return -1;
  } else {
    let indexOfValue = -1;

    currentValue.forEach((value, index) => {
      if (searchValue === value) {
        indexOfValue = index;
      }
    });

    return indexOfValue;
  }
};

const SmartSelectorManagedGroup = class extends React.Component {
  constructor (...args) {
    super(...args);

    this._onChange = this._onChange.bind(this);
  }

  _onChange (value, checked) {
    const { multiple, onChange, value: oldValue } = this.props;

    let newValue;

    if (onChange) {
      if (multiple) {
        if (Array.isArray(oldValue)) {
          if (checked) {
            newValue = oldValue.concat(value).sort();
          } else {
            const index = getIndexOfValue(oldValue, value);
            oldValue.splice(index, 1);

            if (oldValue.length) {
              newValue = oldValue;
            } else {
              newValue = null;
            }
          }
        } else if (checked) {
          newValue = [value];
        }
      } else {
        newValue = value;
      }

      onChange(newValue);
    }
  }

  render () {
    const { children, value } = this.props;

    return (
      <div>
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            checked: (
              (!Array.isArray(value) && child.props.value === value)
              || (Array.isArray(value) && value.indexOf(child.props.value) !== -1)
            ),
            onChange: this._onChange,
          })
        ))}
      </div>
    );
  }
};

SmartSelectorManagedGroup.defaultProps = {
  checked: false,
};
SmartSelectorManagedGroup.displayName = 'SmartSelectorManagedGroup';

export default SmartSelectorManagedGroup;
