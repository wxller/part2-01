
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
module.exports = grunt=>{
    grunt.initConfig({
        sass:{
            options:{
                sourceMap:true,
                implementation:sass
			},
            main:{
				expand:true,
				cwd:'src',
				src:['assets/styles/*.scss'],
				dest:'dist/',
				ext:'.css'
            }
        },
		babel:{
			options:{
				sourceMap:true,
				presets:['@babel/preset-env']
			},
			main:{
				expand:true,
				cwd:'src',
				src:['assets/scripts/*.js'],
				dest:'dist/',
				ext:'.js'
				// files:{
				// 	'dist/assets/scripts/main.js':'src/assets/scripts/*.js'
				// }
			}
		},
		// imagemin:{
		// 	main:{
		// 		expand:true,
		// 		cwd:'src',
		// 		src:['assets/images/**'],
		// 		dest:'dist/'
		// 	},
		// },
		htmlmin:{
			main:{
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true
				},
			    files:[{
					expand: true,
					cwd: 'src',
					src: ['*.html'],
					dest: 'dist/',
					ext:'.html'
				}]
			}
		},
        watch:{
			js:{
				files:['src/assets/scripts/*.js'],
				tasks:['babel']
			},
			css:{
				files:['src/assets/styles/*.scss'],
				tasks:['sass']
			}
		}

	})

  loadGruntTasks(grunt) //自动加载所有的grunt插件中的任务
  grunt.registerTask('default',['sass','babel','htmlmin'])

}