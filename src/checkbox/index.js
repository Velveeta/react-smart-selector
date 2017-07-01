import React from 'react';

const styles = {
  cursor: 'pointer',
  display: 'block',
};

const SmartSelectorCheckbox = class extends React.Component {
  constructor (...args) {
    super(...args);

    this._onChange = this._onChange.bind(this);
  }

  _onChange (e) {
    const { onChange, value } = this.props;

    if (onChange) {
      onChange(value, e.target.checked);
    }
  }

  render () {
    const { checked, label, value } = this.props;

    return (
      <label onChange={this._onChange} style={styles}>
        <input type="checkbox" checked={checked} value={value} />
        &nbsp;{label}
      </label>
    );
  }
};

SmartSelectorCheckbox.defaultProps = {
  checked: false,
};
SmartSelectorCheckbox.displayName = 'SmartSelectorCheckbox';

export default SmartSelectorCheckbox;
