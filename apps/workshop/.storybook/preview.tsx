import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeUIProvider as ThemeProvider } from 'theme-ui'
import { theme } from 'theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
