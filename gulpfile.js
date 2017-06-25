var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var jsAssets = "assets/js/";
var cssAssets = "assets/css/";

function formatJS(filePath){
  console.log("formatting JS for " + filePath);
  return gulp.src(filePath)
  .pipe(uglify())
  .pipe(rename(jsAssets + filePath.substring(filePath.lastIndexOf("\\")+1, filePath.length).replace(".js",".min.js")))
  .pipe(gulp.dest("./"));
};

function formatCSS(filePath){
  console.log("formatting CSS for " + filePath);
  return gulp.src(filePath)
  .pipe(csso())
  .pipe(rename(cssAssets + filePath.substring(filePath.lastIndexOf("\\")+1, filePath.length).replace(".css",".min.css")))
  .pipe(gulp.dest("./"));
};

gulp.task('watch',function(){
  gulp.watch('assets/js/main.js',function(event){
    formatJS(event.path);
  });
  gulp.watch('assets/js/util.js',function(event){
    formatJS(event.path);
  });
  gulp.watch('assets/css/main.css',function(event){
    formatCSS(event.path);
  });
});
