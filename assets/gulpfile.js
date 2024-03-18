// Ponemos las dependencias de gul y gulp-sass
var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Automatizamos la compresion de css

gulp.task("sass", (done) => {
  gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./css"));
  done();
});

gulp.task("watch", (done) => {
  gulp.watch("./scss/**/*.scss").on("change", gulp.series("sass"));
  
  done();
});
