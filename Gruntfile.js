'use strict';

function sprite (type, short) {
  return {
    src: 'src/client/img/sprite/' + type + '/**/*.{png,jpg,gif}',
    destImg: 'bin/public/img/sprite/' + type + '.png',
    destCSS: 'bin/.tmp/sprite/' + type + '.css',
    imgPath: '/img/sprite/' + type + '.png',
    cssOpts: {
      cssClass: function (item) {
        var prefix = short ? short + '-' : '';
        return '.' + prefix + item.name + ':before';
      }
    },
    engine: 'gm',
      imgOpts: {
        format: 'png'
      }
  };
}

module.exports = function (grunt) {

  grunt.initConfig({
    sprite: {
      tools: sprite('tools', 'tl');
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
};
