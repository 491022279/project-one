
$(function () {
    //产生数据
    let poker=[];
    let biao={};         //记录当前已经发过的扑克牌
    let color=['h','s','c','d'];
    for(let i=0;i<52;i++){
        let huase=color[Math.floor(Math.random()*4)];
        let shuzi=Math.floor(Math.random()*13+1);
        while(biao[huase+'_'+shuzi]){
            huase=color[Math.floor(Math.random()*4)];
            shuzi=Math.floor(Math.random()*13+1);
        }
        biao[huase+'_'+shuzi]=true;
        poker.push({huase,shuzi});
        //document.write(huase,shuzi+'---')
        //console.log(poker)
    }

    //开始发牌
    let index=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<=i;j++){
            let item=poker[index];
            index++;
            let src="url(img/"+item.shuzi+item.huase+".png)";
            $('<div>').addClass('poker')
                .css('backgroundImage',src)
                .attr('id',i+'_'+j)
                //.html(`${item.shuzi}${item.huase}`)
                .delay(i*50)
                .data('num',item.shuzi)
                .animate({
                    left:300-i*50+100*j,
                    top:60*i,
                    opacity:1
                })
                .appendTo('.table');
        }
    }

    //底部的牌
    for(;index<poker.length;index++){
        let item=poker[index];
        let src='url(img/'+item.shuzi+item.huase+'.png)';
        $('<div>').addClass('poker left')
            .css('backgroundImage',src)
            .delay(50*index)
            .data('num',item.shuzi)

            .animate({left:100,top:500,opacity:1})
            .appendTo('.table')
    }
    //牌的点击上移
    let first=null;
    $('.poker').click(function () {
        //看纸牌是否被压住
        let coords=$(this).prop('id').split('_');
        let ele=$(`#${parseInt(coords[0])+1}_${parseInt(coords[1])+1}`)
        let eles=$(`#${parseInt(coords[0])+1}_${parseInt(coords[1])}`)
        console.log(ele,eles)
        if(eles.length==1||ele.length==1){
            return;
        }
        $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $(this).animate({top:'-=20'});
            }else{
                $(this).animate({top:'+=20'});
            }

        if(!first){
            first=this;
            let sum=$(first).data('num');
            if(sum==13){
                /*$('.active').animate({left:600,top:0}, function () {
                    $(this).remove();
                })*/
                $('.active').animate({left:600,top:0}).queue(function () {
                    $(this).remove();
                })
            }
        }else{
            //active
            let sum=$(first).data('num')+$(this).data('num');
            if(sum==13){

                $('.active').animate({left:600,top:0}, function () {
                    $(this).remove();
                })
            }else{
                $('.active').animate({top:'+=20'}).removeClass('active');
            }
            first=null;
        }
    })


    //底部牌的左右移动
    let moveL=$('.moveL');
    let moveR=$('.moveR');
    let z=1;
    moveR.on('click', function () {
        z++;
        $('.left:last')
            .removeClass('left')
            .addClass('right')
            .css('zIndex',z)
            .animate({left:'+=400'})
    })
    moveL.on('click', function () {
        let right=$('.right');
        if(right.length==0){
            return;
        }
        for(let i=right.length-1;i>=0;i--){
            $(right[i])
                .delay(100*i)
                .animate({left:'-=400'}, function () {
                    $(this).css('zIndex',0);
                })
                .addClass('left')
                .removeClass('right');
        }
    })
})