'use strict';

function sprite (type, short) {
  return {
    src: 'src/img/sprite/' + type + '/**/*.{png,jpg,gif}',
    destImg: 'bin/public/img/sprite/' + type + '.png',
    destCSS: 'bin/public/css/sprite/' + type + '.css',
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
    clean: {
      all: ['bin']
    },

    copy: {
      'bin/public/css/main.css': ['src/css/main.css'],
      'bin/public/css/icons.css': ['src/css/icons.css']
    },

    sprite: {
      tools: sprite('tools', 'tl')
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('build', ['clean', 'copy', 'sprite']);
};
