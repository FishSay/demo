function $(a){
	if (typeof a === "function")
	{
		window.onload = a
	}else if (typeof a === "string")
	{
		return document.getElementById(a);
	}else if (typeof a === "object")
	{
		return a
	}
}

function getElementsByClassName(className,parent,tagName){
	//如果没有限制父元素 就应该是document文档
	var parent = parent || document;
	//如果没有限制tagName 就应该是所有的
	var tagName = tagName || "*";
	//通过标签名来获取到指定范围内的所有的标签
	var Eles = parent.getElementsByTagName(tagName);
	//用一个数组来存储判断成功的元素
	var el = [];
	//比较获取到的所有的标签的类名与className是否一样
	for (var i=0;i<Eles.length ;i++ )
	{
		//如果标签拥有多个类名 从空格处切割开
		var aClassName = Eles[i].className.split(" ");
		//循环到类名数组里面的每一个值再来做比较
		for (var j=0;j<aClassName.length ;j++ )
		{
			if (aClassName[j] === className)
			{
				el.push(Eles[i]);//判断成功就跳出循环
				break;
			}
		}
	}
	return el;
}

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
}

function move(obj,attr,time,value,callback){
	
	//先清除定时器
	clearInterval(obj.timer);
	//获取初始值
	var startValue = parseFloat(getStyle(obj,attr));
	
	var nowTime = new Date();//初始时间
	obj.timer = setInterval(function(){
		var n = (new Date() - nowTime)/time;
		//当n >= 1的时候 动画结束
		if (n >= 1)
		{
			n = 1;
			//清楚定时器
			clearInterval(obj.timer);
			//回调函数
			callback && callback();
		}
		//改变宽度
		obj.style[attr] = startValue + n*(value - startValue) + "px";
	},1000/60)
}


