module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    './dev/styles/main.css':'./src/styles/main.less'
                }
            },
            production: {
                options:{
                    compress: true
                },
                files:{
                        './dist/styles/main.min.css':'./src/styles/main.less'
                    }
            }
        },
        uglify:{
            target:{
                files:{
                    './dist/scripts/main.min.js':'./src/scripts/main.js'
                }
            }
        },
        htmlmin:{
            target:{
                files:{
                    './dist/index.min.html':'./src/index.html'
                }
            }
        }
    

    
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less', 'uglify', 'htmlmin']);
}