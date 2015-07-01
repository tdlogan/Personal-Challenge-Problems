module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['es6/**/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      babel: {
        dist: {
          files: {
            'dist/transpiled.js' : 'dist/ES6_Challenge_Problems.js'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'babel']);

};