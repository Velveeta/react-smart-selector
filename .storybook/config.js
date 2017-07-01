/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

const req = require.context('../src', true, /story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);
