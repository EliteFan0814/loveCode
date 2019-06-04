!function () {
    window.onload = function () {
        let duration = 50
        let isopen = true
        let useCss = document.querySelector('.usecss')
        let prevcode = document.querySelector('.prevcodeinner')
        let write_timer
        let talkTimer
        let csscode = `
/*你好，我是丘比特的弟弟：丘卡皮。
  前两天破坏你惊喜的那个叫 [皮卡丘] ，
  不是我，我和他没关系，这个锅我可不背！
  今天就让你看看我真正的样子！
*/
/*马上出现的是我的鼻子！*/
.nose {
    border: 11px solid red;
    border-color: black transparent transparent transparent;
    border-radius: 9px;
    left: calc(50% - 11px);
    top: 28px;
}
/*让你看看我的大眼睛*/
.eye {
    background-color: #2e2e2e;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
}
/*快看，我的眼睛是不是很亮！*/
.eye::before {
    background-color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 5px;
    top: 1px;
    border: 1px solid #000;
}
/*我的眼睛很好看吧？*/
.eye.left {
    left: calc(50% - 25px - 90px);
}
.eye.right {
    right: calc(50% - 25px - 90px);
}
/*看，我还有腮红呢！*/
.blusher {
    background-color: #fc0d1c;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px solid #000;
    top: 70px;
}
.blusher.left {
    left: calc(50% - 34px - 140px);
}
.blusher.right {
    right: calc(50% - 34px - 140px);
}
/*看我迷人的上嘴唇，哈哈！*/
.upperLip {
    background-color: #fee433;
    width: 80px;
    height: 20px;
    border: 2px solid black;
    top: 50px;
}
.upperLip.left {
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    left: calc(50% - 80px);
    transform: rotate(-15deg);
}
.upperLip.right {
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    right: calc(50% - 80px);
    transform: rotate(15deg);
}
/*还有我可爱的嘴巴。*/
.lowerLip {
    background: #990513;
    width: 140px;
    height: 600px;
    border: 2px solid #000;
    border-radius: 50%;
    bottom: 0;
}
.lowerLip::after {
    bottom: -120px;
    background: red;
    width: 100px;
    height: 200px;
    left: calc(50% - 50px);
    border-radius: 50%/20%;
}
/*好啦，这就是我啦，是不是很好看，很可爱？
  今天怎么这么冷啊！
  糟糕，秀过头了，
  把皮给忘家啦~~~
  稍~~~~
  等~~~~
*/
.show{background-color:#fee433;}
`
        let csscode2 = `
/*这才是我的完全体，
重申一遍，
我不是皮卡丘。
好了，我秀完了，
允许你免费再看几秒，
        3
        2
        1
我走啦，拜拜！
*/
.wrapper{display:none;}
/*糟糕，皮又落下了*/
.show{background:#fff;}
.mytext{display:block;}       
    
   
  你怎么还不走？
       
    
   
  快走啦，这里没东西啦！
       
    
   
  你是要跟我耗下去吗？
       
    
   
  看你这么执着
  *就送你一个大惊喜吧*
      屏住呼吸 
         3  
         2 
         1
*/
`
    let lovetext = `
/*亲爱的 XXX ：
  谢谢有你陪在我身边，
  今天是 520 ，
  和我在一起的日子，
  你总抱怨我不会给你惊喜，
  今天就给你一个代码狗的罗曼蒂克。
                ---爱你的codebug
*/
    `
        clickControl()
        writeCode(csscode, talk, function () { writeCode(csscode2, function () { showHeart() }) })

        function writeCode(add_code, callBack, callBack2) {
            let n = 0
            write_timer = setTimeout(function timer() {
                n++
                useCss.innerHTML += add_code.slice(n - 1, n)
                prevcode.innerHTML += add_code.slice(n - 1, n)
                prevcode.scrollTop = prevcode.scrollHeight
                if (n < add_code.length) {
                    write_timer = setTimeout(timer, duration)
                } else {
                    callBack && callBack()
                    callBack2 && callBack2()
                }
            }, duration)
        }

        function talk(callBack) {
            window.clearInterval(talkTimer)
            talkTimer = setInterval(() => {
                if (isopen) {
                    $('.wrapper-lowerlip').removeClass('open').addClass('close')
                    isopen = false
                } else {
                    $('.wrapper-lowerlip').removeClass('close').addClass('open')
                    isopen = true
                }
            }, 500)
            callBack && callBack()
        }

        function showHeart() {
            $('.rectangle .rectange-wrapper div>div>div').each(function () {
                $(this).css({
                    // position: 'relative',
                    // top: '-200px',
                    width: '0px',
                    height: '0px',
                    opacity: 0
                });
                var wait = Math.floor((Math.random() * 3000) + 1);
                $(this).delay(wait).animate({
                    // top: '0px',
                    width: '30px',
                    height: '30px',
                    opacity: 1
                }, 1000);
            })
            setTimeout(function(){writeCode(lovetext,showText)},5000)
        }

        function showText(){
            $('.mytext').attr('style','color:#000;')
        }

        function clickControl() {
            $('.control').on('click', 'button', function (event) {
                let $btn = $(event.currentTarget)
                let speed = $btn.attr('data-speed')
                console.log(speed)
                $btn.attr('class', 'clicked').siblings().attr('class', 'unclick')
                switch (speed) {
                    case 'slow':
                        duration = 100
                        break
                    case 'normal':
                        duration = 50
                        break
                    case 'fast':
                        duration = 10
                        break
                    case 'end':
                        $btn.prop('disabled',true)
                        clearInterval(write_timer)
                        useCss.innerHTML = csscode
                        prevcode.innerHTML = csscode
                        prevcode.scrollTop = prevcode.scrollHeight
                        talk()
                        writeCode(csscode2, function () { showHeart() })
                        break
                }
            })
        }
    }

}.call() 