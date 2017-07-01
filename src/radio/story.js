import { storiesOf } from '@storybook/react';
import React from 'react';

import Radio from './index';

storiesOf('Radio', module)
  .add('default', () => <Radio label="Radio" />);
