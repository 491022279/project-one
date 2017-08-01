//求任意数组的最大值
function maxNum(arr){
	var max=arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(max<arr[i]){
			max=arr[i];
		};
	};
	console.log(max);
};

//求任意数组的最小值
function minNum(arr){
	var min=arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(min>arr[i]){
			min=arr[i];
		};
	};
	console.log(min);
}

//求任意范围数字和
function addArr(min,max){
	var sun=0;
	for (var i = min; i <= max; i++) {
		sun+=i;
	};
	console.log(sun);
};

//求任意数字的总和
function addNum(a,b,c,...values){
	//rest参数  做为形参最后一个参数

	console.log(values)
}


// type  检测参数数据类型  根据 < > 求最大或最小值
function best(a,type){
	if(type=="<"){
		minNum(arr1);
	}
	if(type==">"){
		maxNum(arr1);
	}
}


//在数组后面添加元素
function push(arr,...values){
	for (var i = 0; i < values.length; i++) {
		arr[arr.length]=values[i]
	};
	return arr;
}

// 递归函数
function down(num){
	if(num<=0){
		// console.log(num)
		return 0;
	}else {
		down(--num);
		console.log(num)
	}
}
// 阶乘函数
function jiecheng(num){
	var sun=1
	for (var i = num; i >=1; i--) {
		sun*=i
	};
	console.log(sun)
}

function jie(num){
	if(num==1){
		return 1;
	}else{
		return num*jie(--num)
	}
}

//从小到大排序
function xiao(arr){
	for (var i = 0; i < arr.length; i++) {
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				var tt=arr[i];
				arr[i]=arr[j];
				arr[j]=tt;
			}
		}
	}
	return arr;
}
// 从大到小排序
function da(arr){
	for (var i = 0; i < arr.length; i++) {
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]<arr[j]){
				var tt=arr[i];
				arr[i]=arr[j];
				arr[j]=tt;
			}
		}
	}
	return arr;
}
// 根据type类型判断排序方式
function pai(arr,type='<'){
	if(arguments.length<1 || arguments.length>2){
		return "请输入参数";
	}
	if(!(arr instanceof Array&&arr.length>1)){
		return '请输入正确的数组'
	}
	if(type!='<' && type!='>'){
		return "请输入正确类型";
	}
	if(type=='<'){
		return xiao(arr)
	}else if(type=='>'){
		return da(arr)
	}
}

// 判断一个字符串中是否包含另一个字符串
function isInClude(str,str2){
	if(str.indexOf(str2)==-1){
			return false;
	}else{
		return true;
	}
}

// 将制定的字符串替换成'*'号
function tihuan(str,str1){
	// str是原字符串  str1是要替换掉的内容

	let xing='';
	for (var i = 0; i < str1.length; i++) {
		// 通过循环判断要替换内容的长度，来决定*号的数量
		xing+="*"
	};
	//可以用let xing='*'.repeat(str1.length)替换

	let newstr=str;
	while(newstr.match(str1)!=null){
	     // 可用(newstr.indexOf(str1)!=-1)替换
		// 通过循环不停的替换，然后赋值给新的字符串
		newstr=newstr.replace(str1,xing)
	}
	return newstr;
}

// 不区分大小写比较两个字符串大小
function bijiao(str,str1){
	if(str.toLowerCase()>str1.toLowerCase()){
		return 'str>str1';
	}else{
		return 'str<str1';
	}
}

// 打印出一段字符串中某一节字符串的位置  方法1
function dump(str,str1){
	let arr=[]
	let xing="*".repeat(str1.length)
	let newstr=str;
	while(newstr.match(str1)!=null){
		arr.push(newstr.indexOf(str1))
		// 通过空数组保存下标 然后在循环外部return，避免直接终止循环，可以在最后获取到下标值，从而进行操作
		newstr=newstr.replace(str1,xing);
	}
		return arr;
}

// 打印出一段字符串中某一节字符串的位置  方法2

function dumpF(str,str1){
	let arr=[];
	for (var i = 0; i < str.length; i++) {
		if(str.substr(i,str1.length)===str1){
			arr.push(i);
		}
	}
	return arr;
}
// 查找数组内随机元素
function yuansu(a,b){
	if(a instanceof Array && arguments.length==2){
		// 参数a是一个数组对象，并且参数为2
		var arr=[];
		for (var i = 0; i <b; i++) {
			var num=Math.floor(Math.random()*b);
			arr.push(a[num]);
		};
		return arr;
	}

}

// 判断数组内是否存在 > 0
function a1 (arr) {
	if(!(arr instanceof Array)){
		return;
	}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]>0){
			return true;
		}
	};
	return false;
}


// 判断数组内是否所有元素都 > 0
function a2(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]<=0){
			return false;
		}
	};
	return true;
}

// 筛选数组内 > 0 的元素
function filter(arr){
	let newarr=[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]>0){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
// 判断数组内是否存在某一个元素
function arrP(arr,ele){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==ele){
			return true;
		}
	};
}
// 删除数组重复的元素
function quchong1(arr){
	let newarr=[];
	for (var i = 0; i < arr.length; i++) {
		if(newarr.indexOf(arr[i])==-1){
		// 当newarr里查询不到arr[i]的时候，插入
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
function quchong2(arr){
	let newarr=[];
	for (var i = 0; i < arr.length; i++) {
		var flag=arrP(newarr,arr[i]);
		// 调用另外一个函数，判断newarr里是否包含arr[i]
		if(!flag){
			newarr.push(arr[i])
		}
	}
	return newarr;
}

function quchong3(arr){
	// 如果当前数组的第i项在当前数组中第一次出现的位置不是i，那么表示第i项是重复的，忽略掉。否则存入结果数组
    var newArr = [];
    for(var i=0, len=arr.length; i<len; i++){
         if(arr.indexOf(arr[i]) == i){
             newArr.push(arr[i]);
         }
     }
     return newArr;
}
// 数组内随机获取任意个元素
function a5(arr){
	let newarr=[];
	let n=Math.floor(Math.random()*arr.length);
	// 让获取的元素个数随机
	for (var i = 0; i < n; i++) {
		let num=Math.floor(Math.random()*arr.length);
		// 让获取元素的内容随机
			newarr.push(arr[num]);
			// 插入新数组
	}
	return newarr;
}
// 数组里随机获取任意个不重复元素
function a6(arr){
	let newarr=[];
	let n=Math.floor(Math.random()*arr.length);
	// 让获取的元素个数随机
	for (var i = 0; i < n; i++) {
		let num=Math.floor(Math.random()*arr.length);
		// 让获取元素的内容随机
		while(newarr.includes(arr[num])){
			// 再循环的时候更新显示的数量，arr的下标
			 num=Math.floor(Math.random()*arr.length);
			 n=Math.floor(Math.random()*num);
		}
		newarr.push(arr[num]);
	}
	return newarr;
}


// 让获取元素
function $(selector,ranger=document){
	let type=typeof selector;
	// 检查参数的数值类型，是字符串还是函数
	if(type=="string"){
		// 获取
		let select=selector.trim();
		// 去除字符串开始的空格，防止传参失误
		let first=select.charAt(0);
		// console.log(select.substr(1))
		if(first=='.'){
			return ranger.getElementsByClassName(select.substr(1),ranger)
			// 返回类名  此时select已经是字符串，所以括号内不用输入引号。
		}
		if(first=='#'){
			return document.getElementById(select.substr(1))
			// 返回id名
		}
		if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select)
		}
        if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
            // 创建一个
            return document.createElement(select.slice(1,-1))
        }
	}
	if(typeof(selector)=="function"){
		//添加
		addEvent(window,'load',selector)
		// window.addEventListener('load',selector)
		// window.onload=function () {
		// 	selector()
        // }
	}

}




//封装样式(实现兼容)
function getStyle(obj,attr){
	if(window.getComputedStyle){//把方法当做一个属性
		// alert('1');
		return getComputedStyle(obj,null)[attr];
	}else{
		// alert('2');
		return obj.currentStyle[attr];
	}
}



// /ml(obj[,content])方法
//获取或设置某一个元素的内容
//obj指定的对象
//[content]设置的内容（可有[设置]可无[获取]）


function html(obj,content){
	if(content){
		//设置
		obj.innerHTML=content;
	}else{
		//获取
		return obj.innerHTML;
	}
}


// 动画函数
// animate(box,{width:400,height:400,left:300},function(){
// 		box.style.background='green'
// 	})

// 	animate(box,{width:400,height:400,left:300},function(){
// 		animate(box,{left:100})
// 	})

	function animate(obj,attr,callback){
		// 对象，对象的属性和值 json格式 ，回调函数
		let t=setInterval(move,200);
			function move(){
				for(let i in attr){
					let currentV=parseInt(getComputedStyle(obj,null)[i])+10;
					// 获取当前obj的长宽属性
					if(currentV>=attr[i]){
						// 如果实际尺寸达到要求，
						 currentV=attr[i];
						// 让当前的值等于要求尺寸
						clearInterval(t);
						// 就清除时间函数
						if(callback){
							// 回调函数
							callback.call()
						}
					}
					obj.style[i]=currentV+'px';
				}
			}

		}


// 获取父元素下所有的子元素集合  标签
function getChilds(obj){
	let arr=[]
	obj.childNodes.forEach(function(value,index){
		if(value.nodeType==1){
			arr.push(value)
		}
	})
	return arr;
}
// 获取父元素下第一个标签元素
function first (obj) {
	return getChilds(obj)[0];
}
// 获取父元素下最后一个标签元素
function last (obj) {
	let childs=getChilds(obj);
	return childs[childs.length-1]
}

// 把一个子元素插入到一个父元素中，扩充到body上,使用的时候  子元素的appendTo(父元素),会直接插入到你想要的父元素
Node.prototype.appendTo=function (parent) {
	parent.appendChild(this)
};

// addEvent(obj,'click',fn)
function addEvent(obj,type,fn) {
	obj.addEventListener(type,fn,false);
}

// 判断兼容，滚轮事件，向上滑动选择一个事件，向下另外一个
function  mousewheel(obj,unfn,downfn) {
    obj.addEventListener('mousewheel',fn,false)
    function fn(e) {
        let dir=e.wheelDelta;
        if(dir==120 || dir==180 || dir==150){
            unfn.call(obj);
        }
        if(dir==-120 || dir==-180 || dir==-150){
            downfn.call(obj);
        }
    }
}
// 调用
// mousewheel(box,function () {
//     this.style.background='yellow'
// },function () {
//     this.style.background='green'
// })





// 金字塔
function jin(){
  let a =30
   for(let b = 1; b <= a; b++) {  
     for(let c = (a-b) *2 ; c >= 0; c--) {  
          document.write("&nbsp");         
        }  
          for(var d = 1; d <= b - 1; d++) {  
          document.write("A" + " &nbsp");
      }  
          document.write("<br/>"); 
   } 
}















