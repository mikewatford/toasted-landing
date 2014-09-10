module.exports = function(grunt) {

  // define tasks
  grunt.initConfig({
    // JS tasks ================================================
    // check all js files for errors
    jshint: {
      all: [ 'src/js/*.js', 'src/js/**/*.js' ]
    },

    // minify all js files to app.min.js in dist
    uglify: {
      build: {
        files: {
          'dist/js/app.min.js' : [ 'src/js/**/*.js', 'src/js/*.js' ]
        }
      }
    },


    // CSS tasks ===============================================
    // process sass to main.css in dist
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/main.css' : [ 'src/scss/**/*scss', 'src/scss/*.scss' ]
        }
      }
    },


    // MISC tasks ==============================================
    // watch the src files and run their tasks
    watch: {
      options: {
        livereload: true,
      },

      js: {
        files: [ 'src/js/**/*.js', 'src/js/*.js' ],
        tasks: [ 'jshint', 'uglify' ]
      },

      css: {
        files: [ 'src/scss/**/*.scss', 'src/scss/*.scss' ],
        tasks: [ 'sass' ]
      },

      html: {
        files: [ '**/*.html', '*.html' ]
      }
    },

    // watch node server for changes
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: [ 'nodemon', 'watch' ]
    }

  });

  // load tasks
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-nodemon' );
  grunt.loadNpmTasks( 'grunt-concurrent' );

  // register tasks
  grunt.registerTask('default', [
    'jshint',
    'uglify',
    'sass',
    'concurrent'
  ]);

};