import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Terms from '../../src/components/welcome/Terms';

storiesOf('Terms', module)
  .add('default', () => (<Terms />));