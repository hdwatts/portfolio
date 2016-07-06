/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-bootstrap': {
      'importBootstrapTheme': true
    },
    favicon: {
      config: {
      }
    }
  });

  app.import("vendor/css/simpletextrotator.css")
  app.import("vendor/css/font-awesome.min.css")
  app.import("vendor/css/et-line-font.css")
  app.import("vendor/css/magnific-popup.css")
  app.import("vendor/css/flexslider.css")
  app.import("vendor/css/animate.css")
  app.import("vendor/css/linecons.css")
  app.import("vendor/css/style.css")
  app.import("vendor/css/custom.css")

  app.import("vendor/fonts/et-line.eot")
  app.import("vendor/fonts/et-line.svg")
  app.import("vendor/fonts/et-line.ttf")
  app.import("vendor/fonts/et-line.woff")
  app.import("vendor/fonts/flexslider-icon.eot")
  app.import("vendor/fonts/flexslider-icon.svg")
  app.import("vendor/fonts/flexslider-icon.ttf")
  app.import("vendor/fonts/flexslider-icon.woff")
  app.import("vendor/fonts/fontawesome-webfont.eot")
  app.import("vendor/fonts/fontawesome-webfont.svg")
  app.import("vendor/fonts/fontawesome-webfont.ttf")
  app.import("vendor/fonts/fontawesome-webfont.woff")
  app.import("vendor/fonts/fontawesome-webfont.woff2")
  app.import("vendor/fonts/FontAwesome.otf")
  app.import("vendor/fonts/linecons.eot")
  app.import("vendor/fonts/linecons.svg")
  app.import("vendor/fonts/linecons.ttf")
  app.import("vendor/fonts/linecons.woff")

  app.import("vendor/images/dean-greyscale.jpeg")

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
