import { storiesOf } from '@storybook/react';
import React from 'react';
import MessageUser from './MessageUser';

const message: string = 'A user message';

storiesOf('User message', module).add('Default', () => <MessageUser>{message}</MessageUser>);
