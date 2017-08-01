$(function(){
//        下拉
    let lis=$('.nav-ul>li');
    let uls=$('ul',lis);
    lis.hover(function(){
        $(this).find($('.xl')).slideDown();
    },function(){
        $(this).find($('.xl')).slideUp().finish();
    })

//        轮播图
    let bn=$('.banner');
    let btnl=$('.btnl');
    let btnr=$('.btnr');
    let banner=$('.wheel .box');
    let slider=$('.slider>li');
    btnl.hover(function(){
        $(this).addClass('btnls')
    }, function () {
        $(this).removeClass('btnls')
    })
    btnr.hover(function(){
        $(this).addClass('btnrs')
    },function(){
        $(this).removeClass('btnrs')
    })
    btnl.on('click',function(){
        let active=$('.active');
        let slider0=$('.slider0');
        let prev=active.prev();
        move(prev,'right');
    });
    btnr.on('click',function(){
        let active=$('.active');
        let slider0=$('.slider0');
        let next=active.next();
        move(next,'left');
    });
    t=setInterval(function () {
        btnr.triggerHandler('click');
    },3000)
    bn.on('mouseenter', function () {
        clearInterval(t)
    })
    bn.on('mouseleave',function(){
        t=setInterval(function () {
            btnr.triggerHandler('click');
        },3000)
    })
    function move(obj,name){
        let active=$('.active');
        let slider0=$('.slider0');
        if(name=="left"){
            let nexts=active.next();
            if(nexts.length==0){
                obj=banner.first();
                active.addClass(name).removeClass(name).removeClass('active');
            }else{
                active.addClass(name)
                    .delay(1000)
                    .queue(function(){
                        $(this).removeClass(name).removeClass('active').dequeue();
                    });
            }
        }
        if(name=="right"){
            let prevs=active.prev();
            if(prevs.length==0){
                obj=banner.last();
                active.addClass(name).removeClass(name).removeClass('active');
            }else{
                active.addClass(name)
                    .delay(1000)
                    .queue(function(){
                        $(this).removeClass(name).removeClass('active').dequeue();
                    });
            }
        }
        //判断要添加的内容
        let names=name==='left'?'right':'left';
        obj.addClass(names);
        obj.get(0).offsetwidth;
        obj.removeClass(names).addClass('active');

    }

    //轮播点

})