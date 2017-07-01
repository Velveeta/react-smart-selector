import { storiesOf } from '@storybook/react';
import React from 'react';

import SmartSelector from './index';

const getOptions = size => {
  return (new Array(size)).fill(true).map((value, index) => ({
    label: `Option ${index + 1}`,
    value: index + 1,
  }));
};

const SmartStorySelector = class extends React.Component {
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
    const { multiple, size } = this.props;
    const { value } = this.state;

    const options = getOptions(size);

    return (
      <SmartSelector options={options} multiple={multiple} onChange={this._onChange} value={value} />
    );
  }
};

storiesOf('SmartSelector', module)
  .add('small multiple', () => <SmartStorySelector multiple={true} size={5} />)
  .add('large multiple', () => <SmartStorySelector multiple={true} size={10} />)
  .add('small single', () => <SmartStorySelector size={5} />)
  .add('large single', () => <SmartStorySelector size={10} />);
