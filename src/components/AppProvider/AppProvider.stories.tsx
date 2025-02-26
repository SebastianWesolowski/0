import type { Meta, StoryObj } from '@storybook/react';
import { AppProvider } from './AppProvider';

const meta: Meta<typeof AppProvider> = {
  title: 'Components/AppProvider',
  component: AppProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AppProvider>;

export const Default: Story = {
  args: {
    children: <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">Example Content</div>,
  },
};

export const WithThemedContent: Story = {
  args: {
    children: (
      <div className="p-4 space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">Light/Dark Theme Demo</div>
        <p className="text-gray-900 dark:text-gray-100">This text adapts to theme</p>
      </div>
    ),
  },
};
