<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', ['time' => date('Y-m-d', time())]);
});

Route::get('/admin/', function () {
    return view('admin');
});

// 路由分组->路由前缀 为admin分配专属路由
//Route::prefix('admin')->group(function () {
//    //去掉vue#号 匹配所有的字符串路由后台路由可以由后台写死配置   (这样有个坏毛病就是随便输入地址都会走这里)
//    Route::any('{all}', function () {
//        return view('layouts.admin'); //路由指向 vue布局文件
//    })->where(['all' => '.*']);
//});

Route::get('/demoprint', 'DemoController@dmoe_print');
Route::get('/demoversions', function () {
    return phpinfo();
});
