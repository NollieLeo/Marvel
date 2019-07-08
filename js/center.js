var personInfo = {
    "img":[{"src":"1.jpg"},
    ],
    "Pname":[{"name":"Shane Kate"},
    ]
};
//封装元素创建函数
function createDoc(doc,cName,parent){
    var createDoc = $(doc);
    if (cName.indexOf("#")=='0'){
        var DcName = cName.substring(1);
        var createClass = createDoc.attr('id',DcName)
    }else {
        var createClass = createDoc.addClass(cName);
    }
    var appendToParent = createClass.appendTo(parent);
    return appendToParent;
}
$(document).ready(function () {
    var nav = $('nav'),
        menu = $('nav h1'),
        main = $('main'),
        open = false,
        hover = false;
    menu.on('click', function () {
        open = !open ? true : false;
        nav.toggleClass('menu-active');
        main.toggleClass('menu-active');
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
        console.log(open);
    });
    menu.hover(
        function () {
            if (!open) {
                nav.addClass('menu-hover');
                main.addClass('menu-hover');
            }
        }, function () {
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
        }
    );
    $(".menu-activea li").each(function (index) {
        var liNode = $(this);
        liNode.click(function () {
            timeoutId = setTimeout(function () {
                $("section.active_Section").removeClass("active_Section");
                $(".menu-activea li.active_li").removeClass("active_li");
                $("section").eq(index).addClass("active_Section");
                liNode.addClass("active_li");
                nav.removeClass('menu-active');
                main.removeClass("menu-active");
                open = !open;
            }, 200);
        })
    });
    //    动态发布区域
    $("#sendInput").on('focus', function () {
        $("#sendBoxSub").slideDown("slow");
    });

//    ----------
//    创建评论条
//    ----------
//    模拟数据

    //判断输入的字数
    $("#sendInput").on('keyup', function () {
        var content_len = $("#sendInput").text().replace(/\s/g, "").length;
        $("#text_length").text("已经输入" + content_len + "个字");
        if (content_len == 0) {
            $("#text_length").text("");
            $("#send").addClass("disabled").attr("disabled", "true");
            return false;
        } else {
            $("#send").removeClass("disabled").removeAttr("disabled");
            return true;
        }
    });
    //添加表情包
    for (var i = 1; i < 60; i++) {
        $(".emoji_1").append("<img src='../img/emoji/f" + i + ".png' style='width: 3.2rem;height: 3.2rem;border: 1px solid #ccc;vertical-align: middle;padding: 1px;cursor: pointer;'>");
    }
    //添加表情包2
    for (var i = 1; i < 61; i++) {
        $(".emoji_2").append("<img src='../img/emoji/h" + i + ".png' style='width: 3.2rem;height: 3.2rem;border: 1px solid #ccc;vertical-align: middle;padding: 1px;cursor: pointer;'>");
    }
    //显示表情包
    $("#myEmoji").click(function () {
        $(".my_emoji").toggle();
    });
    //将表情添加到输入框
    $('.my_emoji img').each(function () {
        $(this).click(function () {
            var url = $(this)[0].src;
            // console.log(url);
            $("#sendInput").append("<img src='" + url + "' style='width: 2.5rem;height: 2.5rem;vertical-align: sub;'>");
            $("#send").removeClass("disabled").removeAttr("disabled");
        })
    });
    //切换选项卡
    $(".emoji_set").click(function () {
        $(".emoji_hot").removeClass("li_active");
        $("#hot").hide();
        $(".emoji_set").addClass("li_active");
        $("#set").show(1000);
    });
    $(".emoji_hot").click(function () {
        $(".emoji_set").removeClass("li_active");
        $("#set").hide();
        $(".emoji_hot").addClass("li_active");
        $("#hot").show(1000);
    });
    $("#edit_form").on('click', '#send', function () {
        var myDate = new Date();
        //    year
        var year = myDate.getFullYear();
        //    month
        var month = myDate.getMonth();
        //    date
        var date = myDate.getDate();
        var h = myDate.getHours();
        var m = myDate.getMinutes();
        if (m < 10) {
            m = '0' + m;
        }
        var s = myDate.getSeconds();
        if (s < 10) {
            s = '0' + s;
        }
        var now = year + '-' + month + '-' + date + " " + h + ':' + m + ":" + s;
        //    获取输入的内容
        var oSize = $('#sendInput').html();
        // console.log(oSize);
        //    创建HTml
        var msgCome = $("<div>").addClass("msg_come");
        $("#msgShow").prepend(msgCome);
        // createDoc("<div>","msg_come","#msgShow");
        var msgComeSub = createDoc("<div>", "msg_come_sub", msgCome);
        // $("<div>").addClass("msg_come_sub").appendTo(msgCome);
        var comment = createDoc("<div>", 'comment', msgCome);
        // $("<div>").addClass("comment").appendTo(msgCome);
        var commentPic = createDoc("<div>", "comment_pic", comment);
        // $("<div>").addClass('comment_pic').appendTo(comment);
        var commentPicSpan1 = $("<span>").css({
            'float': "right",
            "margin-left": "4rem",
            "font-size": "1,5vw",
            "line-height": "1",

            "cursor": "pointer"
        }).appendTo(commentPic);
        $("<i>").addClass("fa fa-fw fa-edit fa-edit-block").appendTo(commentPicSpan1);
        $("<span>").css({
            'float': "right",
            "margin-left": "4rem",
            "font-size": "1,5vw",
            "line-height": "1",
            "color": "#6b6767",
            "cursor": "pointer"
        }).text("|").appendTo(commentPic);
        $("<span>").css({
            'float': "right",
            "margin": "0",
            "font-size": "1vw",
            "line-height": "2",
            "color": "#6b6767",
            "cursor": "pointer"
        }).text("11").appendTo(commentPic);
        var commentPicSpan4 = $("<span>").css({
            'float': "right",
            "margin-left": "4rem",
            "font-size": "1,5vw",
            "line-height": "1",
            "color": "#6b6767",
            "cursor": "pointer"
        }).appendTo(commentPic);
        $("<i>").addClass("fa fa-fw fa-heart-o heart").appendTo(commentPicSpan4);
        $("<div>").addClass('comment_now').appendTo(comment);
        //处理信息发布内容区域
        var personImg = $("<div>").addClass("person_img").appendTo(msgComeSub);
        var msgInfo = $("<div>").addClass("msg_info").appendTo(msgComeSub);
        var msgBox = $("<div>").addClass("msg_box").appendTo(msgComeSub);
        var msgContent = $("<div>").addClass("msg_content").appendTo(msgBox);

        //添加个人信息以及发布时间
        $.each(personInfo.img, function (index, value) {
            console.log(value + index);
            $("<img>").css({
                'width': '100%',
                'height': '100%',
                'display': 'block',
                'border-radius': '50%',
            }).attr("src", "../img/" + $(value).attr("src")).appendTo(personImg);
        });

        $.each(personInfo.Pname, function (index, value) {
            console.log($(value).get(0).name);
            $("<h3>").css({
                'padding': '1rem 0 0 0',
                'margin': '0',
                'font-size': '1.8vw',
                'color': 'black'
            }).text($(value).get(0).name).appendTo(msgInfo);
        });
        $("<span>").css({
            'font-size': ".9vw",
            'color': "#666"
        }).text(now).appendTo(msgInfo);
        //添加p
        $("<p>").css({
            'width': "100%",
            'word-wrap': 'break-word',
            'word-break': 'break-all',
            'overflow': 'hidden',
            'color': 'rgba(59,59,60,.88)',
            'margin': '0 1%',
            'display': 'inline-block'
        }).html(oSize).appendTo(msgContent);
        $("#sendInput").empty();
        $("#send").addClass("disabled").attr("disabled", "true");
        $("#text_length").text("");
    });
    //评论
    $("#msgShow").on('click', '.fa-edit', function () {
        var content = '<div class="comment_send"><div class="comment_write" contenteditable="true" tabindex="1"></div><div class="comment_button_content"><a href="javascript:;" id="comment_send_button" class="comment_send_button_a">发送</a></div></div>';
        if ($(this).is('.fa-edit-block')) {
            $(this).parents(".comment_pic").next('.comment_now').append(content);
            $(this).removeClass('fa-edit-block');
            // $(".comment_write").focus();
            $(this).parents(".comment_pic").next('.comment_now').find(".comment_write").focus();

        } else {
            $(this).addClass('fa-edit-block');
            $(this).parents(".comment_pic").next('.comment_now').children('.comment_send').remove();
        }
    });


    var msgShow = $(".msg_show");

//    点赞模块

    msgShow.on("click", ".heart", function () {
        var zNum = $(this).parent().prev().html();
        // alert(zNum);
        if ($(this).is(".fa-heart")) {
            zNum--;
            $(this).removeClass("fa-heart");
            $(this).addClass("fa-heart-o");
            $(this).parent().prev().html(zNum);
        } else {
            zNum++;
            // alert(zNum);
            $(this).removeClass("fa-heart-o");
            $(this).addClass("fa-heart");
            $(this).parent().prev().html(zNum);
        }
    });

//    点击添加评论

    msgShow.on("click", ".comment_send_button_a", function () {
        var myDate = new Date();
        //    year
        var year = myDate.getFullYear();
        //    month
        var month = myDate.getMonth();
        //    date
        var date = myDate.getDate();
        var h = myDate.getHours();
        var m = myDate.getMinutes();
        if (m < 10) {
            m = '0' + m;
        }
        var s = myDate.getSeconds();
        if (s < 10) {
            s = '0' + s;
        }
        var now = year + '-' + month + '-' + date + " " + h + ':' + m + ":" + s;
        var msg_p = $(this).parent().prev().text();
        // alert(msg_p);
        // console.log(msg_p);
        var content = '<div class="comment_sub">\n' +
            '                            <!--评论人的头像-->\n' +
            '                            <div class="comment_per_img pull-left">\n' +
            '                                <img src="../img/' + personInfo.img[0].src + '" alt="">\n' +
            '                            </div>\n' +
            '                            <!--评论人的信息-->\n' +
            '                            <div class="comment_per_info pull-left">\n' +
            '                                <!--评论人的名字和评论内容-->\n' +
            '                                <div class="comment_per_info_content">\n' +
            '                                    <a href="#" class="comment_per_name">' + personInfo.Pname[0].name + '</a>\n' +
            '                                    <span class="comment_per_say">' + msg_p + '</span>\n' +
            '                                </div>\n' +
            '                                <!--评论人评论的时间以及回复-->\n' +
            '                                <div class="comment_per_time">\n' +
            '                                    <span class="comment_per_time_show pull-left">' + now + '</span>\n' +
            '                                    <span class="span_delete">删除</span>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
        $(this).parent().parents(".comment").parents(".msg_come").append(content);
        // console.log(s);
        // content.appendTo(s);
        $(this).parent().prev().text("");
    });
    msgShow.on("click", ".span_delete", function () {
        var a = $(this).parents(".comment_sub").remove();
        console.log(a);
    });
//    修改个人信息
    $("#changeInfo").click(function () {
        //获取昵称
        var nickNameShow = $("#nickNameShow");
        var nickName = $("#nickname");
        var nickNameText = nickNameShow.text();
        var nickNameValue = nickName.val();
        //获取姓名
        var realNameShow = $("#realNameShow");
        var realName = $("#realName");
        var realNameText = realNameShow.text();
        var realNameValue = realName.val();
        //获取性别
        var sex = $("#sex");
        var sexChoose = $("#sex_choose");
        var sexChooseRadio = $("#sex_choose input[name='radio']:checked");

        var sexNum = sexChooseRadio.val();
        // console.log(sexNum);
        var summeryShow = $("#summeryShow");
        var summeryShowText = summeryShow.text();
        var summery = $("#summery");
        var summeryText = summery.val();
        if ($(this).is(".change_info")) {
            $(this).removeClass("change_info");
            $(this).text("保存").css({
                "background": "white",
                "color": "black",
            });
            nickName.attr("placeholder", nickNameText);
            // console.log(nickName);
            nickName.show();
            nickNameShow.hide();
            realName.attr("placeholder", realNameText);
            realName.show();
            realNameShow.hide();

            sex.hide();
            sexChoose.show();

            summeryShow.hide();
            summery.show();
            summery.val(summeryShowText);
        } else {
            $(this).addClass("change_info");
            $(this).text("编辑").css({
                "background": "black",
                "color": "white",
            });
            if (nickName.val() == "") {
                nickNameShow.text(nickName.attr("placeholder"));
                console.log(nickName.attr("placeholder"));
            } else {
                nickNameShow.text(nickNameValue);
            }
            if (realName.val() == "") {
                realNameShow.text(realName.attr("placeholder"));
                console.log(realName.attr("placeholder"));
            } else {
                realNameShow.text(realNameValue);
            }
            switch (sexNum) {
                case 1:
                    sex.text("男");
                    break;
                case 2:
                    sex.text("女");
            }
            if(sexNum=="1"){
                sex.text("男");
            }else {
                sex.text("女");
            }
            summeryShow.text(summeryText);
            nickName.hide();
            realName.hide();
            nickNameShow.show();
            realNameShow.show();
            sex.show();
            sexChoose.hide();
            summeryShow.show();
            summery.hide();
        }
        // console.log("改变了")
    });
//    ------------------
//    个人信息标签切换部分
//    ------------------
    $("#fansContent .fans_content_span").each(function (index) {
        var liNode = $(this);
        // console.log(liNode);
        liNode.click(function () {
            timeoutId = setTimeout(function () {
                $("div.info_section_active").removeClass("info_section_active");
                $("#fansContent .fans_content_span.fans_content_span_active").removeClass("fans_content_span_active");
                $("div.personal_info_div").eq(index).addClass("info_section_active");
                liNode.addClass("fans_content_span_active");
            },100)
        })
    });
//    粉丝关注和取消关注
    $(".fans_container").on("click",".fans_direct",function () {
        var span = $(this).find("span");
        var i =$(this).find("i");
        // console.log(a);
        if (i.is(".fa-plus")) {
            span.text("已关注");
            i.removeClass("fa-plus").addClass("fa-check");
        }else {
            span.text("关注");
            i.removeClass("fa-check").addClass("fa-plus")
        }

    })


});