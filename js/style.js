/**
 * Created by xfr011 on 2015/7/29.
 */
$(function(){
    var ble=true;
    var menuTime=["50","100","150","200","250","300","350"];
    var menuTimes=["10","20","30","40","50","60","70"];
    $(".sq_menu").on("click",function(){
        var navLength=$(".sq_meun_nav .sq_nav_1").length;
        if(ble){
            $(".sq_meun_back").animate({"left":"0"},500);
            for(var i=0;i<navLength;i++){
                $(".nav"+i).delay(menuTime[i]).animate({"marginLeft":"0"},"slow");
            }
            ble=false;
        }else{
            $(".sq_meun_back").delay(100).animate({"left":"-50%"},500);
            for(var ii=0;ii<navLength;ii++){
                $(".nav"+ii).delay(menuTimes[ii]).animate({marginLeft:"-155%"},100);
            }
            ble=true;
        }
    });


    var nav=$(".sq_meun_nav").find(".sq_nav_1");
    nav.hover(function() {
        $(this).children(".sq_nav_park").css("opacity","1");
    },function(){
        $(this).children(".sq_nav_park").css("opacity","0");
    });

    var ctx1=document.querySelector('.c1').getContext('2d');
    var ctx2=document.querySelector('.c2').getContext('2d');
    var ctx3=document.querySelector('.c3').getContext('2d');
    var ctx4=document.querySelector('.c4').getContext('2d');
    var n=0;
    circle(ctx1,80);
    circle(ctx2,83);
    circle(ctx3,90);
    circle(ctx4,88);
    function circle(ctx,num){
        ctx.lineWidth=2;
        ctx.lineCap='round';
        ctx.strokeStyle='#21B74B';
        ctx.font='bold 20px san-serif';
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        t=setInterval(keyframe,100);
        function keyframe(){
            n++;
            if(n>=num){
                clearInterval(t);
            }else{
                ctx.clearRect(0,0,90,90);
                ctx.beginPath();
                var angle=(n*360/100-90)*Math.PI/180;
                ctx.arc(45,45,40,-Math.PI/2,angle,false);
                ctx.stroke();
                ctx.fillText(`${n}%`,45,45);
            }
        }
    }

    var ul=document.querySelector('.sq_three_s2>ul');
    var lis=document.querySelectorAll('li',ul);
    var widths=parseInt(getStyle(lis[0],'width'))+parseInt(getStyle(lis[0],'margin-right'));
    var jiantou=document.querySelector('.jiantou');
    var jiantou2=document.querySelector('.jiantou2');
    var flag=true;
    jiantou2.onclick=function(){
        if(flag=true){
            movel();
        }
        flag=false;
    }
    jiantou.onclick= function () {
        if(flag!=false){
            mover();
        }
        flag=true;
    }
    function movel(){
        ul.style.left=0;
        animate(ul,{left:-4*widths},function(){
            for(let i=0;i<4;i++){
                let first=getFirst(ul);
                ul.appendChild(first);
                ul.style.left=0;
            }
            //flag=false;
        })
    }
    function mover(){
        for(let i=0;i<4;i++){
            let last=getLast(ul);
            let first=getFirst(ul);
            ul.insertBefore(last,first);
            ul.style.left=-widths+'px';
            animate(ul,{left:0},function(){
                //flag=true;
            })
        }
    }
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
});