window.onload= function () {
    let mask=document.querySelector('.mask');
    let eraserbg=document.querySelector('.eraserbg')
    let obj=document.querySelector('canvas');
    let ctx=obj.getContext('2d');
    let tool=document.querySelector('.tool');
    let label=document.querySelectorAll('.tool>label');
    let pencil=document.querySelector('.pencil');
    let eraser=document.querySelector('.eraser');
    let xian=document.querySelector('.xian');
    let xuxian=document.querySelector('.xuxian');
    let juxing=document.querySelector('.juxing');
    let yuanjiaojuxing=document.querySelector('.yuanjiaojuxing');
    let duobianxing=document.querySelector('.duobianxing');
    let yuan=document.querySelector('.yuan');
    let wujiaoxing=document.querySelector('.wujiaoxing');
    let wenzi=document.querySelector('.wenzi');
    let baocun=document.querySelector('.baocun');
    let chexiao=document.querySelector('.chexiao');
    let miaobian=document.querySelector('.miaobian');
    let tianchong=document.querySelector('.tianchong');
    let miaos=document.querySelector('.miaos');
    let caijian=document.querySelector('.caijian');
    let cbtn=document.querySelector('.cbtn');
    let xinjian=document.querySelector('.xinjian');
    let arr=[];

    let Palette=new palette(obj,mask,ctx);
    tool.onclick=function(e){
        let obj=e.target;
        if(obj.nodeName=='LABEL'){
            for(let i=0;i<label.length;i++){
                label[i].style.background='';
            }
            obj.style.background='#fff';
        }
    }

    pencil.onclick=function(){
        Palette.pencil();
    }
    eraser.onclick=function(){
        Palette.eraser(30,30,eraserbg);
    }
    xian.onclick=function(){
        Palette.xian();
    }
    xuxian.onclick= function(){
        Palette.xuxian();
    }
    juxing.onclick=function(){
        Palette.juxing();
    }
    duobianxing.onclick=function(){
        let n=prompt('输入边数','5');
        Palette.duobianxing(n);
    }
    yuanjiaojuxing.onclick=function(){
        Palette.yuanjiaojuxing(30);
    }
    yuan.onclick=function(){
        Palette.yuan(100);
    }
    wujiaoxing.onclick=function(){
        let n=prompt('输入角数','6');
        Palette.wujiaoxing(n);
    }
    wenzi.onclick=function(){
        Palette.wenzi();
    }
    miaobian.onclick=function(){
        Palette.style='stroke';
    }
    tianchong.onclick=function(){
        Palette.style='fill';
    }
    miaos.onchange=function(){
        Palette.strokeStyle=miaos.value;
        Palette.fillStyle=miaos.value;
        console.log(Palette.strokeStyle)
    }

    caijian.onclick=function(){
        Palette.caijian(cbtn);
    }
    xinjian.onclick=function(){
        Palette.xinjian();
    }
    baocun.onclick=function(){
        Palette.baocun();
    }
    chexiao.onclick=function(){
        Palette.chexiao();
    }
    document.body.onkeydown=function(e) {
        if (e.ctrlKey && e.keyCode == 90){
            let last = arr.pop();
            ctx.putImageData(last,0,0);
        }
    }


}