# grunt-uglifyid

> processing module dependency id.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-uglifyid --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-uglifyid');
```

## The "uglifyid" task

### Overview
In your project's Gruntfile, add a section named `uglifyid` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  uglifyid: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.root
Type: `String`
Default value: `''`

A string value that is dependent on the root directory.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `define(function(){})`, the generated result would be `define(PATH(id), function(){})`

```js
grunt.initConfig({
  uglifyid: {
    options: {},
    files: {
      'tmp/': ['test/expected/*.js', 'test/expected/*/*.js'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `test/expected/a.js` file has the content `define(function(){})`, the generated result in this case would be `define('tmp/test/expected/a.js', function(){})`

```js
grunt.initConfig({
  uglifyid: {
    options: {
      root: 'tmp/',
    },
    files: {
      'tmp/': ['test/expected/*.js', 'test/expected/*/*.js'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 2016-05-19   v0.1.4   update readme.md and test.
