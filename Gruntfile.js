module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'main.min.js': ['main.js']
                }
            }
        },
        elm: {
            compile: {
                files: {
                    "main.js": ["src/Main.elm"]
                }
            }
        },
        watch: {
            elm: {
                files: ["src/*"],
                tasks: ["elm"]
            }
        },
        clean: ["elm-stuff/build-artifacts"]

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-elm');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['elm']);
    grunt.registerTask('release', ['clean','elm','uglify']);

};
