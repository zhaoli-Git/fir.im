//打字效果的文字
var str = `BetaAppHost
{　　
   return fir.im
}`;

var i=0;
//定义一个状态	  
var state = true;

//定义当前的page页
var CurrentPage = 0;
        
//总页数   
var allPage = 5;

var screenW=document.documentElement.clientWidth || document.body.clientWidth;

//初始化，开始动画2s后消失
function init(){
	setTimeout(function(){
		$('#loading .loading_animate img').hide();	
		startAnimate();	
		
	},1000)	
}

//进入转场动画
function startAnimate(){
	var loading =$('#loading .loading_animate');
	console.log(loading);
	var w = loading.width();
    var h = loading.height();
    var timer = null;
    clearInterval(timer);
    timer=setInterval(function(){
    	loading.css({
            width: w += 20,
            height: h += 20,
            marginTop : -(w/2),
			marginLeft : -(h/2)          
        })

        if(w>screenW){
        	clearInterval(timer);  	
        	$('.plane_wrap').addClass('fly_in');  
        	console.log('添加了class') 
        	$('#loading').hide();  
        

        	setTimeout(function(){
        		$('.plane_wrap').removeClass('fly_in');				
        	},1000);	
        }
    },10)
}


//jQuery 主体部分
$(function(){
	init();    
	typing();
	console.log(state)

	$(document).on("mousewheel DOMMouseScroll", function (e) {   
	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	 
	    if (delta > 0) {
	        CurrentPage--;
	        console.log(CurrentPage)
	        // 向上滚
	        console.log("wheelup");
	    } else if (delta < 0) {
	        CurrentPage++;
	        console.log(CurrentPage) 
	        console.log("wheeldown");
	    }

	    if(CurrentPage===1){
			console.log('current为1')
			$('.plane_wrap').addClass('fly_out');
			$('.navbar').addClass('fontchange');
			$('.nav_list  a').addClass('fontchange');
			$('#typer').hide();
			
			setTimeout(function(){
				$('.section1').addClass('fadeOut');
			},1000);			
		}	
	});

		
})


//打字效果
function typing(){
	var typer = $('#typer');
	if (i <= str.length) { 
		typer.html(str.slice(0,i++)+'|') ;
		setTimeout('typing()', 150);  //递归调用
	}else{
		typer.html(str);  //结束打字,移除光标
		
	}
	state=false;		
}


//给document加上鼠标滚轮事件

