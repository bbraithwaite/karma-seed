'use strict';

module.exports = {
	karma: {
		browsers: ['PhantomJS', 'Chrome'], // add more browsers i.e. Firefox, IE...
   	preprocessors: {
      'lib/*.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    autoWatch: false,
    singleRun: true
	}
};