module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['build', 'deps-dev', 'deps']],
    'body-max-line-length': [0]
  }
}
