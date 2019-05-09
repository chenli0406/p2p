
// 引入
var gulp = require('gulp');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var reload=require("gulp-livereload")
// 静态服务器
gulp.task('serve', function() {
   // 初始化编译
    runSequence('less','image','uglify');
    browserSync.init({
        //  服务器配置
        server: {
            baseDir: "./"  // 服务器的根目录
        }
    });
      // 添加代码的监听
      gulp.watch("assets/images/**", ['image']).on('change', reload);
      gulp.watch("assets/styles/*.less", ['less']).on('change', reload);
      gulp.watch("assets/js/*.js", ['js']).on('change', reload);
      gulp.watch("*.html").on('change', reload);
    
});

// 压缩JS
gulp.task('uglify',function(){
  console.log('开始压缩JS.....');
  
  gulp
    .src('assets/js/*.js')  // 源
    .pipe(uglify())
    .pipe(rename(function(path){
        // 统一放在JS
            // path.dirname ='./js/' + ''
            // path.dirname ='./js/other/'
        path.dirname = './js/'+path.dirname;
        if(path.extname.indexOf('.js')>=0){
          path.extname = '.min.js'
        }
    }))
    .pipe(gulp.dest('dist')); // 输出地址
})


// 压缩images
gulp.task('image',function(){
    console.log('开始压缩image.....');
    
    gulp
      .src('assets/images/**')  // 源
      .pipe(imagemin())
      .pipe(rename(function(path){
          // 统一放在JS
          path.dirname = './image/';
      }))
      .pipe(gulp.dest('dist')); // 输出地址
  })

// 压缩less
gulp.task('less',function(){
  console.log('开始压缩css.....');
  
  gulp
    .src('assets/styles/*.less')  // 源
    .pipe(less()) // 1）把less编译成css
    .pipe(cleanCss({compatibility: 'ie8'}))// 2）压缩css
    .pipe(rename(function(path){
        // 判断文件后缀内容，过滤文件夹
        if(path.extname.indexOf('.css')>=0){
          path.dirname ='./css'
          path.extname = '.min.css';
        }
    }))// 3）重命名
    .pipe(gulp.dest('dist')); // 输出地址
})



