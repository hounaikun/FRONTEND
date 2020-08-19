/*
* 1.下载require.js,并引入
*       将require.js导入项目：js/libs/require.js
*
* */
(function (){
    requirejs.config({ //编写模块的路由
        baseUrl:'js/', //基本路径 出发点在根目录下
        paths:{
            dataService:'./moduls/dataService', //以baseUrl为基础
            alerter:'./moduls/alerter'
        }
    })
    requirejs(['alerter'],function (alerter) {
        console.log(alerter);
    })
})()