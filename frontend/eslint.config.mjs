import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  // Apply to all JavaScript and JSX files
  { files: ['**/*.{js,mjs,cjs,jsx}'] },

  // Include browser globals
  {
    languageOptions: {
      globals: globals.browser,
      globals: globals.node,
      // ecmaVersion: 2022,
      sourceType: 'module',
    },
  },

  // Use recommended JS configurations
  pluginJs.configs.recommended,

  // Use recommended React configurations
  pluginReact.configs.flat.recommended,

  // Uncomment if Node.js environment is needed
  // {env: {node: true}},
];
