/*
 * grunt-uglifyid
 * https://github.com/WihteCrow/grunt-uglifyid
 *
 * Copyright (c) 2016 crow
 * Licensed under the MIT license.
 */

'use strict';

function addId(id, str) {
    var a = 'define(\'' + id + '\', ';
    var reg = /define\(/gi;
    return str.replace(reg, a);
}

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('uglifyid', 'The best Grunt plugin ever.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            root: ''
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // write file
                grunt.file.write(f.dest + filepath, addId(filepath, grunt.file.read(filepath)));
            });



            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
