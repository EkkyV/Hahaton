import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js', 'prettier.config.cjs']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
);
