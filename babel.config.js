// React Compiler must run before other transforms — see
// https://react.dev/learn/react-compiler.
const reactCompilerPlugin = ['babel-plugin-react-compiler', { target: '19' }];

module.exports = {
  overrides: [
    {
      exclude: /\/node_modules\//,
      presets: ['module:react-native-builder-bob/babel-preset'],
      plugins: [reactCompilerPlugin],
    },
    {
      include: /\/node_modules\//,
      presets: ['module:@react-native/babel-preset'],
    },
  ],
};
