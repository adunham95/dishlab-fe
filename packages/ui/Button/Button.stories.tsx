import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './Button';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;



export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    variant: "primary"
  },
};