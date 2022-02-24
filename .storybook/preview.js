import {
  withThemes
} from "@react-theming/storybook-addon/dist/preview";
import { ThemeProvider } from "@emotion/react";
import {
  firstTheme,
  secondTheme
} from "../src/components/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withThemes(ThemeProvider, [firstTheme, secondTheme])];

