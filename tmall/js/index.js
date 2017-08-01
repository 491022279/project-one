/*
* @Author: Administrator
* @Date:   2017-04-28 17:56:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 08:40:02
*/

'use strict';
function $(selector,ranger=document){
	let type=typeof selector;
	if(type=='string'){
		let select=selector.trim();
		let first=select.charAt(0); 
		if(first=='.'){
			//截取第一个字符
			return ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
			//判断字符串是否符合标签的规则    正则
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}else if(type=='function'){
		window.onload=function(){
			selector();
		}
	}
}

$(function(){
	// 轮播图
	let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);
	let slider=$('.slider')[0];
	let slider0=$('div',slider);
	let banner=$('.banner')[0];
	lis[0].style.zIndex=10;
	let index=0;
	let t;
	t=setInterval(move,2000);
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}

	for(let i=0;i<slider0.length;i++){
		slider0[i].onclick=function(){
			for(let j=0;j<slider0.length;j++){
				lis[j].style.display='none';
				slider0[j].className='';
			}
			slider0[i].className='slider0';
			lis[i].style.display='block';
			index=i;
		}
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display="none";
			slider0[i].className='';
			
		}
		lis[index].style.display="block";
		slider0[index].className='slider0';
	}

	// 导航栏
	let topBtn=$('.top-btn');
	let topBox=$('.top-box');
	for(let i=0;i<topBtn.length;i++){
		topBtn[i].onmouseenter=function(){
			this.style.background='#fff';
			topBox[i].style.display='block';
		}
		topBtn[i].onmouseleave=function(){
			this.style.background='none';	
			topBox[i].style.display='none';
		}
	}

	// 小猫头
	let n0=$('.n0');
	let navImg=$('.nav-img');
	for(let i=0;i<n0.length;i++){
		n0[i].onmouseenter=function(){
			navImg[i].style.display='block';
		}
		n0[i].onmouseleave=function(){
			navImg[i].style.display='none';
		}
	}

	// 侧边栏
	let b0=$('.b0');
	let pannel=$('.pannel');
	for(let i=0;i<b0.length;i++){
		b0[i].onmouseenter=function(){
			this.style.background='#fff';
			pannel[i].style.display='block';
		}
		b0[i].onmouseleave=function(){
			this.style.background='none';
			pannel[i].style.display='none';
		}
	}

	// 直播图右侧
	let mo=$('.mo');
	let you=$('.you');
	for(let i=0;i<mo.length;i++){
		mo[i].onmouseenter=function(){
			you[i].style.display='block';
		}
		mo[i].onmouseleave=function(){
			you[i].style.display='none';
		}
	}

	// 三行广告
	// 美丽人生
	let beauty=document.querySelectorAll('.beauty311');
	let p1=document.querySelectorAll('.beauty311>p');
	let p1Top=parseInt(getComputedStyle(beauty[0],null).height);
	let current1=0,next1=0;
	let t1;
	for(let i=0;i<p1.length;i++){
		if(i==0){
			continue;
		}
		p1[i].style.top=p1Top+'px';
	}
	t1=setInterval(move1,2000);
	function move1(){
		next1++;
		if(next1==p1.length){
			next1=0;
		}
		p1[next1].style.top=p1Top+'px';
		animate(p1[current1],{top:-p1Top});
		animate(p1[next1],{top:0});
		current1=next1;
	}
	

	//潮流酷玩
	let chao=document.querySelectorAll('.chao311');
	let p2=document.querySelectorAll('.chao311>p');
	let p2Top=parseInt(getComputedStyle(chao[0],null).height);
	let current2=0,next2=0;
	let t2;
	for(let i=0;i<p2.length;i++){
		if(i==0){
			continue;
		}
		p2[i].style.top=p2Top+'px';
	}
	t2=setInterval(move2,2000);
	function move2(){
		next2++;
		if(next2==p2.length){
			next2=0;
		}
		p2[next2].style.top=p2Top+'px';
		animate(p2[current2],{top:-p2Top});
		animate(p2[next2],{top:0});
		current2=next2;
	}

	//居家生活
	let jia=document.querySelectorAll('.jia311');
	let p3=document.querySelectorAll('.jia311>p');
	let p3Top=parseInt(getComputedStyle(jia[0],null).height);
	let current3=0,next3=0;
	let t3;
	for(let i=0;i<p3.length;i++){
		if(i==0){
			continue;
		}
		p3[i].style.top=p3Top+'px';
	}
	t3=setInterval(move3,2000);
	function move3(){
		next3++;
		if(next3==p3.length){
			next3=0;
		}
		p3[next3].style.top=p3Top+'px';
		animate(p3[current3],{top:-p3Top});
		animate(p3[next3],{top:0});
		current3=next3;
	}

	//打造爱巢
	let ai=document.querySelectorAll('.ai311');
	let p4=document.querySelectorAll('.ai311>p');
	let p4Top=parseInt(getComputedStyle(ai[0],null).height);
	let current4=0,next4=0;
	let t4;
	for(let i=0;i<p4.length;i++){
		if(i==0){
			continue;
		}
		p4[i].style.top=p4Top+'px';
	}
	t4=setInterval(move4,2000);
	function move4(){
		next4++;
		if(next4==p4.length){
			next4=0;
		}
		p4[next4].style.top=p4Top+'px';
		animate(p4[current4],{top:-p4Top});
		animate(p4[next4],{top:0});
		current4=next4;
	}

	//户外出行
	let wai=document.querySelectorAll('.wai311');
	let p5=document.querySelectorAll('.wai311>p');
	let p5Top=parseInt(getComputedStyle(wai[0],null).height);
	let current5=0,next5=0;
	let t5;
	for(let i=0;i<p5.length;i++){
		if(i==0){
			continue;
		}
		p5[i].style.top=p5Top+'px';
	}
	t5=setInterval(move5,2000);
	function move5(){
		next5++;
		if(next5==p5.length){
			next5=0;
		}
		p5[next5].style.top=p5Top+'px';
		animate(p5[current5],{top:-p5Top});
		animate(p5[next5],{top:0});
		current5=next5;
	}

	//亲子时光
	let qin=document.querySelectorAll('.qin311');
	let p6=document.querySelectorAll('.qin311>p');
	let p6Top=parseInt(getComputedStyle(qin[0],null).height);
	let current6=0,next6=0;
	let t6;
	for(let i=0;i<p6.length;i++){
		if(i==0){
			continue;
		}
		p6[i].style.top=p6Top+'px';
	}
	t6=setInterval(move6,2000);
	function move6(){
		next6++;
		if(next6==p6.length){
			next6=0;
		}
		p6[next6].style.top=p6Top+'px';
		animate(p6[current6],{top:-p6Top});
		animate(p6[next6],{top:0});
		current6=next6;
	}

	//顶部搜索框、侧边栏、图片按需加载
	let sou=document.querySelector('.sou');
	let ch=window.innerHeight;
	let floors=document.querySelectorAll('.floor');
	let arr=[];
	floors.forEach(function(value,index){
		arr.push(value.offsetTop);
	})
	let jiu=document.querySelector('.jiu');
	let jiu0=document.querySelectorAll('.jiu>li');
	let n=0,flag=true,flag1=true;
	for(let i=0;i<jiu0.length;i++){
		jiu0[i].onclick=function(){
			flag=false;
			jiu0[n].classList.remove('jius');
			this.classList.add('jius');
			n=i;
			animate(document.body,{scrollTop:arr[i]},function(){flag=true;});
		}
	}
	window.onscroll=function(){
		if(!flag){
			return;
		}
		let tops=document.body.scrollTop;
		if(tops>=800){
			if(flag1){
				animate(sou,{top:0});
				flag1=false;
			}
		}else if(tops<800){
			if(!flag1){
				flag1=true;
				animate(sou,{top:-50});
			}
		}
		if(tops+ch>1200){
			jiu.style.left='20px';
		}else{
			jiu.style.left='-28px';
		}
		for(let i=0;i<arr.length;i++){
			if(tops+ch>arr[i]+200){
				jiu0[n].classList.remove('jius');
				jiu0[i].classList.add('jius');
				n=i;
				let imgs=floors[i].getElementsByTagName('img');
				for(let j=0;j<imgs.length;j++){
					imgs[j]['src']=imgs[j]['title'];
				}
			}
		}
	}

	//黑色右边栏
	let hei=$('.hei');
	let h0=$('.h0');
	let heia=$('.heia');
	for(let i=0;i<h0.length;i++){
		h0[i].onmouseenter=function(){
			heia[i].style.display='block';
		}
		h0[i].onmouseleave=function(){
			heia[i].style.display='none';
		}
	}
})