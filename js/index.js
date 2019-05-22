(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})
(document, window);
$(document).ready(function(){
    // 点击领取
    $('#allbtn1').click(function(){
        showyn('#allbtn1','btnAll')
        $('#backChange').removeClass("backTwo").addClass("backOne");
    })
    // 点击第二个领取
    $('#allbtn2').click(function(){
        showyn('#allbtn2','btnAll')
        $('#backChange').removeClass("backOne").addClass("backTwo");
    })

    // 确定按钮
    $('.popBtn1').click(function(){
        let class_obj = $(this).parent('.popBtn').parent('.popText').siblings('div').prop('class')
        popClose('.pop','.cover')
        if (class_obj == 'backOne') {
            $('#allbtn1').removeClass("btn").addClass("btnAll");
            $('#allbtn2').removeClass("btn").addClass("btnAll");
        } else {
            $('#allbtn2').removeClass("btn").addClass("btnAll");
            $('#allbtn1').removeClass("btn").addClass("btnAll");
        }
    });
    // 隐藏
    $('.close').click(function(){
        popClose('.pop')
    });

    $('.popBtn2').click(function(){
        popClose('.pop')
    });
})
// 点击按钮是否展示弹窗
function showyn (obj,class_str) {
    if (!$(obj).prop('class').includes(class_str)) {
        popShow('.pop');
    }
}


// 显示
function popShow (a1,a2) {
    $(a1).show();
    showMask();
}
function popClose (p1,p2) {
    $(p1).hide();
    hideMask();
}
//显示遮罩层
function showMask(){
    $("#mask").css("height",$(document).height());
    $("#mask").css("width",$(document).width());
    $("#mask").show();
    $('body').css('position','fixed');
}
//隐藏遮罩层
function hideMask(){
    $("#mask").hide();
    $('body').css('position','unset');
}