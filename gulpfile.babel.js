'use strict';

import gulp from 'gulp'
import sass from 'gulp-sass'
import handlebars from 'gulp-compile-handlebars';
import concat from 'gulp-concat'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'
import uglify from 'gulp-uglify'
import ftp from 'vinyl-ftp'
import surge from 'gulp-surge'
import babel from 'gulp-babel'
import cssimport from 'gulp-cssimport'
import beautify from 'gulp-beautify'
import uncss from 'gulp-uncss'
import cssmin from 'gulp-cssnano'
import sourcemaps from 'gulp-sourcemaps'
import critical from 'critical'

/* baseDirs: baseDirs for the project */

const baseDirs = {
	dist: 'dist/',
	src: 'src/',
	assets: 'dist/assets/'
};

/* routes: object that contains the paths */

const routes = {
	styles: {
		scss: `${baseDirs.src}styles/*.scss`,
		_scss: `${baseDirs.src}styles/_includes/*.scss`,
		css: `${baseDirs.dist}assets/css/`
	},

	templates: {
		hbs: `${baseDirs.src}templates/*.hbs`,
		_hbs: `${baseDirs.src}templates/_includes/*.hbs`
	},

	scripts: {
		base: `${baseDirs.src}scripts/`,
		js: `${baseDirs.src}scripts/*.js`,
		jsmin: `${baseDirs.dist}assets/js/`
	},

	files: {
		html: 'dist/',
		images: `${baseDirs.src}images/*`,
		imgmin: `${baseDirs.dist}assets/files/img/`,
		cssFiles: `${baseDirs.dist}assets/css/*.css`,
		htmlFiles: `${baseDirs.dist}assets/*.html`,
		styleCss: `${baseDirs.dist}css/style.css`
	},

	deployDirs: {
		baseDir: baseDirs.dist,
		baseDirFiles: `${baseDirs.dist}**`,
		ftpUploadDir: 'FTP-DIRECTORY'
	}
};

/* ftpCredentials: info used to deploy @ ftp server */

const ftpCredentials = {
	host: 'HOST',
	user: 'USER',
	password: 'PASSWORD'
};

const surgeInfo = {
	domain: 'YOURDOMAIN.surge.sh'
};

const hbsOptions = {
    handlebars: {
        data: {},
        options: {
            batch: [
                './src/templates/_includes/'
            ]
        },
        rename: {
            extname: '.html'
        }
    }
};
/* Compiling Tasks */

// Handlebars

gulp.task('handlebars', () => {
    return gulp.src(routes.templates.hbs)
        .pipe(handlebars(hbsOptions.handlebars.data, hbsOptions.handlebars.options))
        .pipe(rename(hbsOptions.handlebars.rename))
        .pipe(gulp.dest(baseDirs.dist))
        .pipe(browserSync.stream());
});

// SCSS

gulp.task('styles', () => {
	return gulp.src(routes.styles.scss)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer('last 3 versions'))
		.pipe(sourcemaps.write())
		.pipe(cssimport({}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest(routes.styles.css))
		.pipe(browserSync.stream())
});

/* Scripts (js) ES6 => ES5, minify and concat into a single file. */

gulp.task('scripts', () => {
	return gulp.src(routes.scripts.js)
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(routes.scripts.jsmin))
		.pipe(browserSync.stream())
});

/* Image compressing task */

gulp.task('images', () => {
	gulp.src(routes.files.images)
		.pipe(imagemin())
		.pipe(gulp.dest(routes.files.imgmin));
});

/* Deploy, deploy dist/ files to an ftp server */

gulp.task('ftp', () => {
	const connection = ftp.create({
		host: ftpCredentials.host,
		user: ftpCredentials.user,
		password: ftpCredentials.password
	});

	return gulp.src(routes.deployDirs.baseDirFiles, {
		base: routes.deployDirs.baseDir,
		buffer: false
	})
		.pipe(connection.dest(routes.deployDirs.ftpUploadDir))
});

gulp.task('surge', () => {
	return surge({
		project: routes.deployDirs.baseDir,
		domain: surgeInfo.domain
	});
});

/* Preproduction beautifiying task (SCSS, JS) */

gulp.task('beautify', () => {
	return gulp.src(routes.scripts.js)
		.pipe(beautify({indentSize: 4}))
		.pipe(gulp.dest(routes.scripts.base))
});

/* Serving (browserSync) and watching for changes in files */

gulp.task('serve', () => {
	browserSync.init({
		server: './dist/'
	});

	gulp.watch([routes.styles.scss, routes.styles._scss], ['styles']);
	gulp.watch([routes.templates.hbs, routes.templates._hbs], ['handlebars']);
	gulp.watch(routes.scripts.js, ['scripts', 'beautify']);
});

/* Remove unusued css */

gulp.task('uncss', () => {
	return gulp.src(routes.files.cssFiles)
		.pipe(uncss({
			html: [routes.files.htmlFiles],
			ignore: ['*:*']
		}))
		.pipe(cssmin())
		.pipe(gulp.dest(routes.styles.css))
});

/* Extract CSS critical-path */

gulp.task('critical', () => {
	return gulp.src(routes.files.htmlFiles)
		.pipe(critical.stream({
			base: baseDirs.dist,
			inline: true,
			minify: true,
			html: routes.files.htmlFiles,
			css: routes.files.styleCss,
			ignore: ['@font-face', /url\(/],
			width: 1300,
			height: 900
		}))
			.pipe(gulp.dest(baseDirs.dist))
});

gulp.task('icons', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest(baseDirs.dist+'/assets/fonts/'));
});


gulp.task('dev', ['handlebars', 'styles', 'scripts', 'images', 'serve']);

gulp.task('build', ['handlebars', 'styles', 'scripts', 'images']);

gulp.task('optimize', ['uncss', 'critical', 'images']);

gulp.task('deploy', ['optimize', 'surge']);

gulp.task('default', () => {
	gulp.start('dev');
});
