Package.describe({
  name: 'ranux:expr-eval',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple wrapper package in Meteor for the Expr-eval library.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/RANUX/expr-eval',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1');
  api.add_files('lib/expr-eval-1.0.0.min.js');
});