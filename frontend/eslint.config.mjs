import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: globals.browser,
      globals: globals.node,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    extends: ['react-app'],
  },
];
