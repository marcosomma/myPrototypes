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
                    'CODECLIMATE_REPO_TOKEN=5fbffedf45c6f78952b3313671300948260aaf2fc7d05d0a01086b2950a9fd3c codeclimate< ./coverage/lcov.info'
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
};