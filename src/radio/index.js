import React from 'react';

const styles = {
  cursor: 'pointer',
  display: 'block',
};

const SmartSelectorRadio = class extends React.Component {
  constructor (...args) {
    super(...args);

    this._onChange = this._onChange.bind(this);
  }

  _onChange (e) {
    const { onChange, value } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  render () {
    const { checked, label, value } = this.props;

    return (
      <label onChange={this._onChange} style={styles}>
        <input type="radio" checked={checked} value={value} />
        &nbsp;{label}
      </label>
    );
  }
};

SmartSelectorRadio.defaultProps = {
  checked: false,
};
SmartSelectorRadio.displayName = 'SmartSelectorRadio';

export default SmartSelectorRadio;
