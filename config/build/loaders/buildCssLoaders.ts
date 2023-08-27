import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:3]' : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
