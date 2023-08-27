import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={classNames('app', {}, [theme])}>
    <StoryComponent />
  </div>
);
