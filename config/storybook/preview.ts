import { Preview, StoryContext } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
