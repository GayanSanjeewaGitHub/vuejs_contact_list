// eslint.config.js
export default [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        // Add your preferred rules here
        'no-unused-vars': 'warn',
        'no-console': 'off',
      },
    },
  ];
  