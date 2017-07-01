import { storiesOf } from '@storybook/react';
import React from 'react';

import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox label="Checkbox" />);
