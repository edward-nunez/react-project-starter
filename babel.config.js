module.exports = {
  presets: [
    'babel-preset-react-app',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
