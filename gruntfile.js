module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
            '<%= pkg.name %>.min.js':       // target file
            [
              'src/w2w.widgets.module.js',  // Main module first
              'src/*.js'                    // rest follows
            ],
        }        
      }
    },
    concat: {
      options: {
        
      },
      dist: {
        src: ['src/w2w.widgets.module.js', 'src/*.js'],
        dest: '<%= pkg.name %>.js',
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Release task
  grunt.registerTask('release', ['uglify', 'concat']);

};