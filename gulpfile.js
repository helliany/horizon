var syntax        = 'sass';

var gulp          = require('gulp'),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync').create(),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync'),
		pug           = require('gulp-pug'),
		htmlmin       = require('gulp-htmlmin'),
		imagemin      = require('gulp-imagemin'),
		del           = require("del"),
		wait          = require('gulp-wait');

gulp.task('browser-sync', () => {
	browsersync.init({
		server: "app/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});
});

gulp.task('pug', () => {
	return gulp.src('app/pug/pages/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('app'))
});

gulp.task('styles', () => {
	return gulp.src('app/sass/main.sass')
	.pipe(wait(1000))
	.pipe(sass({ 'include css': true }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.stream());
});

gulp.task('js', () => {
	return gulp.src([
		'app/libs/jquery/jquery.min.js',
		'app/libs/font-awesome/fontawesome-all.min.js',
		'app/libs/superfish/superfish.min.js',
		'app/libs/slick/slick.min.js',
		'app/libs/magnific-popup/magnific-popup.min.js',
		'app/libs/mmenu/jquery.mmenu.all.js',
		'app/libs/mmenu/navbars/jquery.mmenu.navbars.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Minify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.stream());
});

gulp.task('transfer', () => {
    return gulp.src([
		"app/**",
	])
        .pipe(gulp.dest("dist"))
});

gulp.task("clean", () => {
	return del(["dist/pug", "dist/sass", "dist/js/common.js"]);
});

gulp.task('html-minify', () => {
	return gulp.src('app/*.html')
	//   .pipe(htmlmin({collapseWhitespace: true}))
	  .pipe(gulp.dest('dist'));
  });

gulp.task('imgmin', () =>
  gulp.src('app/img/**/*')
	  .pipe(imagemin([imagemin.jpegtran({progressive: true}),
		imagemin.svgo(), imagemin.gifsicle()]))
	  .pipe(gulp.dest('dist/img'))
);

gulp.task('build', gulp.series('transfer', 'clean', 'html-minify', 'imgmin'));

gulp.task('rsync', () => {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('js'));
	gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
	gulp.watch('app/*.html'), browsersync.reload;
});

gulp.task('default', gulp.parallel('pug', 'styles', 'js', 'browser-sync', 'watch'));
