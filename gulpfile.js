// Node modules imported
var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();

// Directory variables
var jsAssets = "assets/js/";
var cssAssets = "assets/css/";

// Method uglifies and minifies the JS files main and util.js
// error.js is not watched as it has markdown langualge
function formatJS(filePath){
  console.log("formatting JS for " + filePath);
  return gulp.src(filePath)
  .pipe(uglify())
  .pipe(rename(jsAssets + filePath.substring(filePath.lastIndexOf("\\")+1, filePath.length).replace(".js",".min.js")))
  .pipe(gulp.dest("./"));
};

// Method minifies main.css
function formatCSS(filePath){
  console.log("formatting CSS for " + filePath);
  return gulp.src(filePath)
  .pipe(csso())
  .pipe(rename(cssAssets + filePath.substring(filePath.lastIndexOf("\\")+1, filePath.length).replace(".css",".min.css")))
  .pipe(gulp.dest("./"));
};

//Reloads the page once a change has been detected in _site folder
function reloadPage(){
  console.log("Changes detected, reloading page now");
  browserSync.reload();
};

// Watches for changes in the files and calls the respective methods
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
  gulp.watch('_site/**/*.*', function(event){
    reloadPage();
  })
  //Start up the Chrome page
  browserSync.init({server: {baseDir: '_site/'}});
});
