const textController = new TextController({
    targets: ['.hero p, .hero span, nav a:not(:has(img)), nav button'],
    duration: 1500,
    hideDuration: 2000,
    delay: 300,
    fps: 150
})
textController.sync('show');
const vh = window.innerHeight * 0.01;
const currentScrollPosition = window.pageYOffset;
setTimeout(() => {
    window.scrollTo({
        top: currentScrollPosition + vh * 100,
        behavior: "smooth",
    });
}, 2000);

$('#betrayal-button').on('click', function() {
    const myShuffleText = new MyShuffleText({
        el: document.querySelector('body *:not(head *, script, style)'),
        duration: 10000,
        hideDuration: 1000,
        delay: 300,
        fps: 60
    })
    myShuffleText.show()
    var movie = 10,
        time = 8000;

    $(this).prop('disabled', true);

    // 背景色を赤色に変更
    $('body').css('background-color', 'red');

    // 新しいウィンドウを生成し、震える
    var win = null;
    var interval = setInterval(function() {
        if (win !== null) {
            clearInterval(win.intervalId);
            win.close();
        }
        var width = Math.floor(Math.random() * 401) + 400;
        var height = Math.floor(Math.random() * 401) + 400;
        win = window.open('about:blank', null, 'width=' + width + ',height=' + height);
        win.document.write('<html><head><style>body { background-color: red; color: black; font-size: 30px; font-family: sans-serif; text-align: center; margin-top: ' + (height / 2 - 40) + 'px; }</style></head><body><div>裏切り者は許さない！</div></body></html>');
        win.moveTo(Math.random() * (screen.width - width), Math.random() * (screen.height - height));
        win.moveBy(0, movie * 2);
        win.intervalId = setInterval(function(w) {
            var x = Math.round(Math.random() * (movie * 4) - movie * 2),
                y = Math.round(Math.random() * (movie * 4) - movie * 2);
            w.moveBy(x, y);
        }, 5, win);
    }, 1000);

    // 10秒後に背景色を青色に変更し、ウィンドウを閉じ、メッセージを表示する
    setTimeout(function() {
        clearInterval(interval);
        if (win !== null) {
            clearInterval(win.intervalId);
            win.close();
        }
        $(this).prop('disabled', false);
        $('body').css('background-color', 'blue');
        $('body').html('<div class="message" style="background-color: blue; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; font-size: 50px; width: 100%; height: 100%;">あなたの心と体の接続が永久に切断されました</div>');
    }, time);
});

$('#fixed-circle-button').on('click', function() {
    $("#logo, #footer, #contact, #access, #contrast, .modal, #fixed-circle-button").remove();
    const sourceElement01 = $(".mainvisual__container01");
    const sourceElement02 = $(".mainvisual__container02");
    const targetElement = $(".mainvisual__container03");
    for (let i = 0; i < 5; i++) {
        const copiedElement01 = sourceElement01.clone();
        const copiedElement02 = sourceElement02.clone();
        targetElement.after(copiedElement02);
        targetElement.after(copiedElement01);
    }
    const textController = new TextController({
        targets: ['a, p, h1:not(:has(img, span)), h2, h3, h4, h5, button, label, option, span'],
        duration: 1500,
        hideDuration: 1500,
        delay: 0,
        fps: 60
    })
    function obfuscateText(text) {
        return text
        .split("")
        .map(function (char) {
            return String.fromCharCode(Math.floor(Math.random() * (127 - 33) + 33));
        })
        .join("");
    }
    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE && node.data.trim() !== "") {
        node.originalText = node.data;
        node.data = obfuscateText(node.data);
        } else {
        for (var i = 0; i < node.childNodes.length; i++) {
            processNode(node.childNodes[i]);
        }
        }
    }
    function obfuscatePage() {
        $('a, p, h1:not(img), h2, h3, h4, h5, button, label, option').each(function () {
            processNode(this);
        });
    }
    // スクロール操作にかかる時間を見積もる (ここでは2000ms)
    const scrollDuration = 2300;
    const delays = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    // 一番下までスクロール
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, 500);
    // 一定時間後に一番上までスクロール
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, scrollDuration);
    textController.sync('hide')
        .then(() =>
            textController.sync('show')
        )
        .then(() =>
            delays.forEach((delay) => {
                setTimeout(() => {
                    obfuscatePage();
                }, delay);
            })
        )
    setTimeout(() => {
        $('#hero2').html('<span>意味からの脱却</span><br><span>己と対話せよ</span><br><span>鏡の世界で</span><br></h1>')
        $('#hero1').html('Always Ask "Why me?"')
        $('#hero3').html('The Mirror World of <a href="onsei.html" style="color: #FFF;" class="text-decoration-none fw-bold"><span id="burn">"Why you?"</span></a>')
        $('#hero4').html('即興演劇・哲学対話の手法を取り入れたセルフコーチングツール')
        $('nav').fadeOut(1000, function() {
            $(this).remove();
        });

        //slideUp();
        $('nav').slideUp(1000, function() {
            $(this).remove();
        });
        }, 5000
    );
    setTimeout(() => {
        $('#burn').burn({
            k: 10,
            diffusion: 1,
            hsla: [207,63,245,0.7],
            blur: 0.2
        });
        $('.col-12, .col-md-7').addClass('hoverEffect');
        $('header').html('<button id="fixed-circle-button2" class="btn btn-danger rounded-circle"><a href="onsei.html" class="text-white text-decoration-none">Why<br>you?</a></button>');
        }, 6000
    );
})


// const h1 = new MyShuffleText({
//     el: document.querySelector('#js-headLine'),
//     duration: 1000,
//     hideDuration: 1000,
//     delay: 300,
//     fps: 60
// })

// const textController = new TextController({
//     targets: ['.js-myText'],
//     duration: 1000,
//     hideDuration: 1000,
//     delay: 300,
//     fps: 60
// })

// const fileInputWrapper = document.querySelector('.fileInput-wrapper')

    // .then(() => textController.seq('show'))
    // .then(() => textController.seq('hide'))
    // .then(() => textController.sync('show'))
    // .then(() => textController.sync('hide'))
    // .then(() => fileInputWrapper.classList.remove('inVisible'))



$(window).scroll(function() {
// フェードアニメーションを呼び出す
    fadeAnime();
});

// フェードアニメーションの設定
function fadeAnime() {
// .fadeUpTriggerが付いた要素に対して
    $('.fadeUpTrigger').each(function() {
        // 縦位置を取得し-50pxして、変数targetに代入する
        let target = $(this).offset().top -= 50;
        // スクロール量を取得し、変数scrollに代入する
        let scroll = $(window).scrollTop();
        // 表示画面の高さを取得し、変数windowHeightに代入する
        let windowHeight = $(window).height();
        // 要素の縦位置から表示画面の高さ+200pxを引いた数字よりscrollのほうが大きい場合
        if(scroll > target - windowHeight + 200) {
        // .fadeUpを追加する
        $(this).addClass('fadeUp');
        } else {
        // そうでない場合は.fadeUpを削除する
        $(this).removeClass('fadeUp');
        }
    });
};


