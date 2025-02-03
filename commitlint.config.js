// https://commitlint.js.org/#/reference-configuration
const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],

  // https://commitlint.js.org/#/reference-rules
  rules: {
    "subject-case": [0, "never", []],
    "header-max-length": [1, "always", 160],
  },
};

module.exports = Configuration;
