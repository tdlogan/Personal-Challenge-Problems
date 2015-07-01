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
<<<<<<< HEAD
          dest: 'dist/<%= pkg.name %>.js'
=======
          dest: 'es5/<%= pkg.name %>.js'
>>>>>>> solutions
        }
      },
      babel: {
        dist: {
          files: {
<<<<<<< HEAD
            'dist/transpiled.js' : 'dist/ES6_Challenge_Problems.js'
=======
            'es5/transpiled.js' : 'es5/ES6_Challenge_Problems.js'
>>>>>>> solutions
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'babel']);

};