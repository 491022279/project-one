/*
* 线、铅笔、矩形、多边形、多角形、圆、虚线、圆角矩形
* 填充、描边、填充样式、描边样式
* 橡皮、文字、裁切、
* 撤销、保存、新建
* */
function palette(obj,mask,ctx){
    this.obj=obj;
    this.mask=mask;
    this.ctx=ctx;
    this.arr=[];
    this.width=obj.width;
    this.height=obj.height;
    //填充 描边
    this.style='stroke';
    this.fillStyle='';
    this.strokeStyle='';
    this.font='20px sans-serif';
    this.textBaseline='middle';
    this.textAlign='center';
    this.lineWidth=2;
    this.n=5;
}
palette.prototype={
    init:function(){
        //初始化
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.strokeStyle=this.strokeStyle;
    },
    pencil:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.ctx.beginPath();
            self.ctx.moveTo(ox,oy);
            self.mask.onmousemove=function(e){
                let mx= e.offsetX,my= e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.lineTo(mx,my);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.stroke();
            }
            self.mask.onmouseup= function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    eraser:function(w,w,eraserbg){
        let self=this;
        self.mask.onmousedown=function(e){
            eraserbg.style.display='block';
            eraserbg.style.width=`${w}px`;
            eraserbg.style.height=`${w}px`;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX-w/2,my=e.offsetY-w/2;
                if(mx>=self.width-w){
                    mx=self.width-w;
                }
                if(mx<=0){
                    mx=0;
                }
                if(my>=self.height-w){
                    my=self.height-w;
                }
                if(my<=0){
                    my=0;
                }
                eraserbg.style.left=mx+'px';
                eraserbg.style.top=my+'px';
                self.ctx.clearRect(mx,my,w,w);
            }
            self.mask.onmouseup=function(){
                eraserbg.style.display='none';
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousedown=null;
                self.mask.onmouseup=null;
            }
        }
    },
    xian:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.stroke();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,900,550));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    xuxian:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.save();
                self.ctx.setLineDash([6,3]);
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.stroke();
                self.ctx.restore();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    juxing:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.rect(ox,oy,mx-ox,my-oy);
                self.ctx.closePath();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    duobianxing:function(n){
        let self=this;
        let angle=(360/n)/180*Math.PI;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                for(let i=0;i<n;i++){
                    let x=ox+r*Math.cos(angle*i);
                    let y=oy+r*Math.sin(angle*i);
                    self.ctx.lineTo(x,y);
                }
                self.ctx.closePath();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    yuanjiaojuxing:function(n){
        /*
        * w=cx-ox;
        * h=cy-oy;
        * r
        * 1 (ox-w+r,oy-h)
        * 2 (cx-r,oy-h)
        * 控制点(cx,oy-h)
        * 结束点(cx,oy-h+r)
        * 3 (cx,cy-r)
        * 控制点(cx,cy)
        * 结束点(cx-r,cy)
        * 4 (ox-w+r,cy)
        * 控制点(ox-w,cy)
        * 结束点(ox-w,cy-r)
        * 5 (ox-w,oy-h+r)*/
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox+n,oy);
                self.ctx.lineTo(mx-n,oy);
                self.ctx.quadraticCurveTo(mx,oy,mx,oy+n);
                self.ctx.lineTo(mx,my-n);
                self.ctx.quadraticCurveTo(mx,my,mx-n,my);
                self.ctx.lineTo(ox+n,my);
                self.ctx.quadraticCurveTo(ox,my,ox,my-n);
                self.ctx.lineTo(ox,oy+n);
                self.ctx.quadraticCurveTo(ox,oy,ox+n,oy);
                self.ctx.closePath();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    yuan:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.arc(ox,oy,r,0,2*Math.PI);
                self.ctx.closePath();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    wujiaoxing:function(n){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox= e.offsetX,oy= e.offsetY;
            let angle=(360/n)/180*Math.PI;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy+r);
                for(let i=0;i<n;i++){
                    let x,y;
                    if(i%2==0){
                        x=ox+r*Math.sin(angle*i);
                        y=oy+r*Math.cos(angle*i);
                    }else if(i%2==1){
                        x=ox+r/2*Math.sin(angle*i);
                        y=oy+r/2*Math.cos(angle*i);
                    }
                    self.ctx.lineTo(x,y);
                }
                self.ctx.closePath();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    wenzi:function(){
        let self=this;
        let tx,ty;
        self.mask.onclick=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            if(self.arr.length>0){
                self.ctx.putImageData(self.arr[self.arr.length-1],0,0)
            }
            let div=document.createElement('div');
            div.style.cssText=`
                min-height:50px;width:100px;background:#fff;border:1px dashed #000;outline:none;
                position:absolute;top:${ox}px;left:${oy}px;
            `;
            div.contentEditable=true;
            let screen=document.querySelector('.screen');
            screen.appendChild(div);
            div.focus();
            div.onmousedown=function(e){
                let dx=e.clientX-div.offsetLeft,dy=e.clientY-div.offsetTop;
                document.onmousemove=function(e){
                    let cx=e.clientX,cy=e.clientY;
                    tx=cx-dx,ty=cy-dy;
                    div.style.left=tx+'px';
                    div.style.top=ty+'px';
                }
                document.onmouseup= function () {
                    document.onmousemove=null;
                    document.onmouseup=null;
                }
            }
            div.onblur= function () {
                let t=div.innerHTML;
                screen.removeChild(div);
                self.ctx.fillText(t,tx,ty);
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
            }
        }
    },
    miaobian:function(){
        this.ctx[this.style]='stroke';
    },
    tianchong:function(){
        this.ctx[this.style]='fill';
    },
    caijian:function(cbtn){
        let self=this;
        self.cbtn=cbtn;
        self.init();
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let minx,miny,w,h;
            self.init();
            self.mask.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                self.init();
                minx=ox>=cx?cx:ox;
                miny=oy>=cy?cy:oy;
                w=Math.abs(cx-ox);
                h=Math.abs(cy-oy);
                cbtn.style.cssText=`
                    width:${w}px;height:${h}px;border:1px dashed #000;display:block;
                    position:absolute;top:${miny}px;left:${minx}px;
                `;
            }
            let body=document.querySelector('body');
            body.onmouseup=function(){
                self.temp=self.ctx.getImageData(minx,miny,w,h);
                self.ctx.clearRect(minx,miny,w,h);
                self.arr.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.ctx.putImageData(self.temp,minx,miny);
                self.drag(minx,miny,w,h,cbtn);
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    drag:function(x,y,w,h,cbtn){
        let self=this;
        self.mask.onmousemove=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            if(ox>x && ox<w+x && oy>y&& oy<h+y){
                self.mask.style.cursor='move';
            }else{
                self.mask.style.cursor='default';
            }
        }
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let cx=ox-x,cy=oy-y;
            if(ox>x && ox<w+x && oy>y && oy<h+y){
                self.mask.style.cursor='move';
            }else{
                self.mask.style.cursor='default';
                return;
            }
            let body=document.querySelector('body');
            body.onmousemove=function(e){
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length!=0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0)
                }
                let mx=e.offsetX,my=e.offsetY;
                let lefts=mx-cx,tops=my-cy;
                if(lefts<0){
                    lefts=0;
                }
                if(lefts>self.width-w){
                    lefts=self.width-w;
                }
                if(tops<0){
                    tops=0;
                }
                if(tops>self.height-h){
                    tops=self.height-h;
                }
                cbtn.style.left=lefts+'px';
                cbtn.style.top=tops+'px';
                x=lefts,y=tops;
                self.ctx.putImageData(self.temp,lefts,tops);
            }
            self.mask.onmouseup=function(){
                console.log(1)
                self.drag(x,y,w,h,cbtn);
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;

            }
        }
    },
    xinjian:function(){
        let self=this;
        self.ctx.clearRect(0,0,self.width,self.height);
        self.arr.push(self.ctx.getImageData(0,0,self.width,self.height));
    },
    baocun:function(){
        let self=this;
        self.ctx.save();
    },
    chexiao:function(){
        let self=this;
        let last=self.arr.pop();
        self.ctx.putImageData(last,0,0);
    },

}