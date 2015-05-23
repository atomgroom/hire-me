module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Grunt express - our webserver
    // https://github.com/blai/grunt-express
    express: {
        all: {
            options: {
                bases: ['/Users/macintosh/GitHub/hire-me/dist'],
                port: 8080,
                hostname: "0.0.0.0",
                livereload: true
            }
        }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ["src/less/"]
        },
        files: {
          "dist/css/styles.css": "src/less/imports.less"
        }
      }
    },

    watch: {
        files: "./src/less/*.less",
        tasks: ["less", "cssmin"],
        options: {
          livereload: true,
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './dist/css',
          src: ['*.css', '!*.min.css'],
          dest: './dist/css',
          ext: '.min.css'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-express');


  grunt.registerTask('build', [
    'cssmin',
    'uglify',
    'jshint',
    'concat'
  ]);

  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'uglify',
    'jshint',
    'cssmin',
    'watch'
  ]);


};
