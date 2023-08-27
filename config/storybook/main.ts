import type { StorybookConfig } from '@storybook/react-webpack5';
// import path from 'path';
// import { BuildPaths } from '../../config/build/types/config';
// import { buildCssLoaders } from '../../config/build/loaders/buildCssLoaders';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // webpackFinal: async (config) => {
  //   const paths: BuildPaths = {
  //     build: '',
  //     html: '',
  //     entry: '',
  //     src: path.resolve(__dirname, '..', 'src'),
  //   };
  //   if (config && config.resolve && config.resolve.modules && config.resolve.extensions && config.module?.rules) {
  //     config.resolve.modules.push(paths.src);
  //     config.resolve.extensions.push('.ts', '.tsx');

  //     config.module.rules.push({
  //       test: /\.svg$/,
  //       use: ['@svgr/webpack'],
  //     });
  //     config.module.rules.push(buildCssLoaders(true));
  //   }

  //   return config;
  // },
};
export default config;
