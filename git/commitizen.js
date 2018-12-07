"use strict";

module.exports = {
  types: [
    { value: "build" },
    { value: "ci" },
    { value: "docs" },
    { value: "feat" },
    { value: "fix" },
    { value: "perf" },
    { value: "refactor" },
    { value: "revert" },
    { value: "style" },
    { value: "test" }
  ],

  scopes: [
    { name: "global" },
  ],

  messages: {
    type: "What changes are you making?",
    scope: "\nSelect the SCOPE that you have changed (optional):",
    subject: "Write a SHORT description in the IMPERATIVE mood:\n",
    body: 'Write a DETAIL description (optional). Use "|" for a new line:\n',
    breaking: "BREAKING CHANGES list (optional):\n",
    footer: "Place for meta-data (issues, references, etc.). For example: SECRETMRKT-700, SECRETMRKT-800:\n",
    confirmCommit: "Are you satisfied with the message you got?"
  },

  allowCustomScopes: false,
  allowBreakingChanges: false,
  footerPrefix: "META:",
  subjectLimit: 72
}
