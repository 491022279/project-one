/*
* @Author: Administrator
* @Date:   2017-04-02 16:19:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-02 16:25:10
*/

'use strict';
window.onload = function()  
{   
     var designWidth=1080;/*定义设计尺寸*/
     function fontSize(){
        var 	CW=document.documentElement.clientWidth; /*设备尺寸*
	  /*console.log(CW); /输出文档的宽度  console.lg(CW);*/
	   var size=CW/designWidth*100+"px";
	   document.querySelector("html").style.fontSize=size;/*设置html的font-size*/
      }
	fontSize();/*运行函数*/
	window.onresize=fontSize;/*监测窗口尺寸是否发生改变*/	
}
