


    function Game(){
        //随机获取字符串
        this.charArr=[
            ['a','img/1.png'],
            ['b','img/2.png'],
            ['c','img/3.png'],
            ['d','img/4.png'],
            ['e','img/5.png'],
            ['f','img/6.png'],
            ['g','img/7.png'],
            ['h','img/8.png'],
            ['i','img/9.png'],
            ['j','img/10.png'],
            ['k','img/11.png'],
            ['l','img/12.png'],
            ['m','img/13.png'],
            ['n','img/14.png'],
            ['o','img/15.png'],
            ['p','img/16.png'],
            ['q','img/17.png'],
            ['r','img/18.png'],
            ['s','img/19.png'],
            ['t','img/20.png'],
            ['u','img/21.png'],
            ['v','img/22.png'],
            ['w','img/23.png'],
            ['x','img/24.png'],
            ['y','img/25.png'],
            ['z','img/26.png']
        ]
        this.charArrlength=5;
        this.cw=window.innerWidth;
        this.currentEle=[];
        this.currentpos=[];
        this.speed=10;        
        this.span1=10;
        // this.span1Element=document.querySelector('.span1');     
        this.span2=0;
        this.span2Element=document.querySelector('.span2');
        this.ga=10;
        this.t1Element=document.querySelector('.t1');
    }
    Game.prototype={
        start:function(){
            //随机获取字符串的长度，出现的字符串的长度小于5
            this.getElements(this.charArrlength);
            this.drop();
            this.key();
        },
        getElements:function(length){
            for(let i=0;i<length;i++){
                this.getChar();
            }
        },
        checkRepeat:function(text){     //输出的字符串不重复
            return this.currentEle.some(function(value){
                return value.innerText==text;
            })
        },
        checkPos:function(lefts){        //图片水平不重叠
            return this.currentpos.some(function(value){
                return value+50>lefts&&lefts+50>value;
            })
        },
        getChar: function () {
            //this.charArr[num]
            //随机获取几个字符串的下标
            let num=Math.floor(Math.random()*this.charArr.length);
            //num  this.charrArr[num][0]   this.currentEle.innerText
            while(this.checkRepeat(this.charArr[num][0])){
                num=Math.floor(Math.random()*this.charArr.length);
            }
            let ele=document.createElement('div');
            let tops=Math.random()*100,lefts=Math.random()*(this.cw-500)+250;
            while(this.checkPos(lefts)){
                lefts=Math.random()*(this.cw-500)+250;
            }
            this.currentpos.push(lefts);
            ele.style.cssText=`width:50px;height:50px;border-radius:3px;
            text-align:center;line-height:50px;
            background:url(${this.charArr[num][1]})  no-repeat center center/cover;
            font-size:0;
            position:absolute;left:${lefts}px;top:${tops}px;`;
            ele.innerText=this.charArr[num][0];
            document.body.appendChild(ele);
            this.currentEle.push(ele);
        },       
        drop:function(){
            let self=this;
            self.t=setInterval(function(){
                for(let i=0;i<self.currentEle.length;i++){
                    let tops=self.currentEle[i].offsetTop+self.speed;
                    self.currentEle[i].style.top=tops+'px';
                    if(tops>500){
                        document.body.removeChild(self.currentEle[i]);
                        //i  超出范围的字符串从数组中截取
                        self.currentEle.splice(i,1);
                        self.currentpos.splice(i,1);
                        self.span1--;
                        // self.span1Element.innerText=self.span1;
                        // self.t1Element.style.width=self.span1*10+'%';
                        self.t1Element.style.width=self.span1*10+'px';
                        console.log(self.t1Element)
                        if(self.span1<=0){
                            let flag=window.confirm('游戏结束，是否继续？');
                            console.log(flag)
                            if(flag){
                                self.restart();
                            }else{
                                close();
                            }
                        }
                    }
                }
                if(self.currentEle.length<self.charArrlength){
                    self.getChar();
                }
            },200)
        },
        key:function(){
            document.body.onkeydown=function(e){
                let code=String.fromCharCode(e.keyCode);
                code=code.toLowerCase();
                for(let i=0;i<this.currentEle.length;i++){
                    if(code==this.currentEle[i].innerText){
                        document.body.removeChild(this.currentEle[i]);                     
                        this.currentEle.splice(i,1);
                        this.currentpos.splice(i,1);
                        this.span2++;
                        this.span2Element.innerText=this.span2;
                        if(this.span2>=this.ga){
                            alert('进入下一关？')
                            this.next();
                           
                        }
                    }
                }
                if(this.currentEle.length<this.charArrlength){
                    this.getChar();
                }
            }.bind(this);
        },
        restart:function(){
            /*初始状态

            停止
            元素删除、数据
            生命、分数
            start*/
            clearInterval(this.t);
            for(let i=0;i<this.currentEle.length;i++){
                document.body.removeChild(this.currentEle[i]);
            }           
            this.currentEle=[];
            this.currentpos=[];
            this.span1=10;
            this.t1Element.style.width=this.span1*10+'%';
            this.span2=0;
            this.span2Element.innerText=this.span2;
            this.start();
        },
        next:function(){
            clearInterval(this.t);
            for(let i=0;i<this.currentEle.length;i++){
                document.body.removeChild(this.currentEle[i]);
            }
            this.currentEle=[];
            this.currentpos=[];
            this.charArrlength++;
            this.ga+=10;
            this.start();
        }
    }


