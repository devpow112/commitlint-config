const Level = Object.freeze({
  DISABLE: 0,
  WARNING: 1,
  ERROR: 2
});

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      Level.ERROR,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'revert',
        'docs',
        'chore',
        'refactor',
        'test',
        'build'
      ]
    ],
    'header-max-length': [Level.WARNING, 'always', 50],
    'body-max-line-length': [Level.WARNING, 'always', 80],
    'footer-max-line-length': [Level.WARNING, 'always', 80]
  }
};
