var gulp = require("gulp"),
    babel = require("gulp-babel"),
    react = require("babel-preset-react")
    es2015 = require("babel-preset-es2015"),
    stage_1 = require("babel-preset-stage-1");

gulp.task("default", function(){
    gulp.src(__dirname + "/src/*.js")
        .pipe(babel({presets: [es2015, stage_1,react]}))
        .pipe(gulp.dest(__dirname + "/dist"))
})
