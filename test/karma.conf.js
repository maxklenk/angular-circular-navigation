'use strict';

// Contents of: test/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      // libraries
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // the directive
      'angular-circular-navigation.js',

      // test
      'test/*_spec.js'
    ],

    singleRun: true,

    browsers: ['Chrome'],

    frameworks: ['jasmine'],

    preprocessors: {
      'angular-circular-navigation.js': 'coverage'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/',
      subdir: '.'
    }

  });
};
