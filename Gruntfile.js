module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['src/js/main.js', 'src/js/index.js'],
        dest: 'build/js/output.min.js'
      }
    },
	cssmin: {
	  options: {
	    mergeIntoShorthands: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'build/css/output.min.css': ['src/css/home.css', 'src/css/main.css']
	    }
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
	
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
