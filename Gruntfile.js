/*
 * grunt-uglifyid
 * https://github.com/WihteCrow/grunt-uglifyid
 *
 * Copyright (c) 2016 crow
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        uglifyid: {
            custom_options: {
                options: {
                    separator: '\n'
                },
                files: {
                    'tmp/': 'modules/**'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'uglifyid', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['uglifyid:custom_options']);
    grunt.registerTask('clean', ['clean']);

};
