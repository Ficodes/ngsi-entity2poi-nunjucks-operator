/*
 * test-generic-ngsimodel
 * https://github.com/pablo/test-generic-ngsimodel-operator
 *
 * Copyright (c) 2020 Vendor
 * Licensed under the MIT license.
 */
const path = require('path')
var ConfigParser = require('wirecloud-config-parser')
var parser = new ConfigParser('src/config.xml')

module.exports = function (grunt) {
    'use strict'

    grunt.initConfig({

        metadata: parser.getData(),

        eslint: {
            operator: {
                options: {
                    configFile: 'src/.eslintrc'
                },
                src: 'src/js/**/*.js',
            },
            grunt: {
                options: {
                    configFile: '.eslintrc'
                },
                src: 'Gruntfile.js',
            },
            tests: {
                options: {
                    configFile: 'tests/.eslintrc'
                },
                src: ['tests/**/*.js']
            }
        },

        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/js', src: '*', dest: 'build/tmp/js' }
                ]
            }
        },

        coveralls: {
            library: {
                src: 'build/coverage/lcov/lcov.info'
            }
        },

        strip_code: {
            test_code: {
                src: ['build/tmp/js/**/*.js']
            }
        },

        compress: {
            operator: {
                options: {
                    mode: 'zip',
                    archive: 'dist/<%= metadata.vendor %>_<%= metadata.name %>_<%= metadata.version %>.wgt'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'DESCRIPTION.md',
                            'css/**/*',
                            'doc/**/*',
                            'images/**/*',
                            'config.xml'
                        ]
                    },
                    {
                        expand: true,
                        cwd: 'build/src',
                        src: [
                            'js/**/*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            'LICENSE'
                        ]
                    }
                ]
            }
        },
        clean: {
            build: {
                src: ['build']
            },
            temp: {
                src: ['build/src']
            },
            buildtemp: {
                src: ['build/tmp']
            }
        },
        webpack: {
            build: {
                mode: 'production',
                entry: {
                    app: ['@babel/polyfill', './build/tmp/js/main.js']
                },
                devtool: 'source-map',
                output: {
                    path: path.resolve(__dirname, 'build/src/js'),
                    libraryTarget: 'umd',
                    filename: 'main.js'
                },
                module: {
                    rules: [
                        {
                            test: /\.js/,
                            exclude: /node_modules/,
                            use: [
                                'babel-loader'
                            ]
                        }
                    ]
                }
            }

        },
        karma: {
            options: {
                customLaunchers: {
                    ChromeNoSandbox: {
                        base: 'Chrome',
                        flags: ['--no-sandbox']
                    }
                },
                files: [
                    { pattern: 'tests/globals.js', served: true, watched: false, included: true },
                    'src/js/*.js',
                    'tests/*Spec.js'
                ],
                exclude: [
                    'src/js/main.js'
                ],
                client: {
                    mocha: {
                        ui: 'bdd'
                    }
                },
                browserify: {
                    debug: true,
                    bundleDelay: 1000,
                    transform: [['babelify', {
                        global: true,
                        presets: ['@babel/preset-env'],
                        ignore: ['node_modules'],
                        plugins: ['@babel/plugin-transform-runtime', 'istanbul']
                    }]],
                    extensions: ['.js']
                },
                frameworks: ['browserify', 'mocha', 'chai'],
                reporters: ['coverage', 'mocha'],
                browsers: ['ChromeHeadless'],
                singleRun: true
            },
            operator: {
                options: {
                    coverageReporter: {
                        reporters: [{ type: 'text' }, {
                            type: 'html',
                            dir: 'build/coverage',
                            subdir: 'html'
                        }, {
                            type: 'lcovonly',
                            dir: 'build/coverage',
                            subdir: 'lcov'
                        }]
                    },
                    preprocessors: {
                        './node_modules/fake-fetch/index.js': ['browserify'],
                        'src/js/*.js': ['browserify'],
                        'tests/*Spec.js': ['browserify']
                    }
                }
            },
            operatorci: {
                options: {
                    reporters: ['coverage', 'mocha'],
                    coverageReporter: {
                        reporters: [
                            { type: 'lcov', dir: 'build/coverage', subdir: 'lcov' }
                        ]
                    },
                    preprocessors: {
                        'src/js/*.js': ['browserify']
                    }
                }
            }
        },

        wirecloud: {
            options: {
                overwrite: false
            },
            publish: {
                file: 'dist/<%= metadata.vendor %>_<%= metadata.name %>_<%= metadata.version %>.wgt'
            }
        }

    })

    grunt.loadNpmTasks('grunt-wirecloud')
    grunt.loadNpmTasks('grunt-karma') // when test?
    grunt.loadNpmTasks('grunt-contrib-compress')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-coveralls')
    grunt.loadNpmTasks('grunt-strip-code')
    grunt.loadNpmTasks('grunt-text-replace')
    grunt.loadNpmTasks('grunt-webpack')
    grunt.loadNpmTasks('grunt-eslint')
    grunt.registerTask('test', [
        'eslint',
        'karma:operator'
    ])

    grunt.registerTask('ci', [
        'eslint',
        'karma:operatorci',
        'coveralls'
    ])

    grunt.registerTask('build', [
        'clean:temp',
        'copy:main',
        'strip_code',
        'webpack:build',
        'clean:buildtemp',
        'compress:operator'
    ])

    grunt.registerTask('default', [
        'test',
        'build'
    ])

    grunt.registerTask('publish', [
        'default',
        'wirecloud'
    ])
}
