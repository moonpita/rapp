import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDRAY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDRAY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
