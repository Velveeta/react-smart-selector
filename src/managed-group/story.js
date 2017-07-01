import { storiesOf } from '@storybook/react';
import React from 'react';

import Checkbox from '../checkbox';
import ManagedGroup from './index';
import Radio from '../radio';

const data = (new Array(5)).fill(true).map((value, index) => ({
  label: `Option ${index + 1}`,
  value: index + 1,
}));

const ManagedStoryGroup = class extends React.Component {
  constructor (...args) {
    super(...args);

    this._onChange = this._onChange.bind(this);

    this.state = {
      value: null,
    };
  }

  _onChange (value) {
    this.setState({
      value,
    });
  }

  render () {
    const { multiple } = this.props;
    const { value } = this.state;

    const Component = (multiple ? Checkbox : Radio);

    return (
      <ManagedGroup multiple={multiple} onChange={this._onChange} value={value}>
        {data.map(option => (
          <Component key={option.value} label={option.label} value={option.value} />
        ))}
      </ManagedGroup>
    );
  }
};

storiesOf('ManagedGroup', module)
  .add('checkboxes', () => <ManagedStoryGroup multiple={true} />)
  .add('radios', () => <ManagedStoryGroup />);
