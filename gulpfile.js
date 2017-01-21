var gulp = require("gulp");
var tsc = require("gulp-typescript");
var maps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

gulp.task("buildapp", function () {

	var src = ['src/**/*.ts'];

	var project = tsc.createProject("tsconfig.json");
	return gulp.src(src)
		.pipe(maps.init())
		.pipe(project()).js
		.pipe(maps.write(".", { includeContent:true, sourceRoot: "" }))
		.pipe(gulp.dest("out"));
});

gulp.task("nodeserver",["buildapp"],function(){

	  var stream = nodemon({
                 script: 'out/startapp.js' // run ES5 code
               , watch: 'src/startapp.ts' // watch ES2015 code
               , tasks: ['buildapp'] // compile synchronously onChange
               }).on('restart',function(ev){
				 	console.log('restart');
				})

  	  return stream
});


