module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely
                options: {
                    mask: '*.js'
                }
            }
        },
        shell: {
            code_climate: {
                command:[
                    'codeclimate< ./coverage/lcov.info'
                ].join('&&'),
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: ''
                    }
                }
            }
        },
        shell: {
            code_climate_build: {
                command:[
                    'codeclimate/codeclimate< ./coverage/lcov.info'
                ].join('&&'),
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: ''
                    }
                }
            }
        }
    });

    grunt.event.on('coverage', function(lcovFileContents, done){
        // Check below
        done();
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coverage', [
        'mocha_istanbul:coverage',
        'shell:code_climate']);
    grunt.registerTask('coverage_build', [
        'mocha_istanbul:coverage',
        'shell:code_climate']);
};
