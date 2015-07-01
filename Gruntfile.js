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
          dest: 'es5/<%= pkg.name %>.js'
        }
      },
      babel: {
        dist: {
          files: {
            'es5/transpiled.js' : 'es5/ES6_Challenge_Problems.js'
          }
        }
      },
      watch: {
        files: ['es6/**/*.js'],
        tasks: ['default'],
      },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'babel']);

};