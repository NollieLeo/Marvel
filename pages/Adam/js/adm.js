function alertBox(text){
    var alert_box="<div class=\"alert_info\">\n"+
        "       <div class=\"alert_content\">\n" +
        "       <p>" + text + "</p>\n"+
        "       </div>\n" +
        "       </div>\n" ;
    return alert_box;
}
$(document).ready(function () {
//       禁止用户
    var ban_alert = "<div class=\"adm_alert\">\n" +
        "        <div class=\"adm_form\">\n" +
        "            <h3>确定禁止此用户访问本网站？</h3>\n" +
        "            <div class=\"ban_time\">\n" +
        "                <form action=\"\">\n" +
        "                    <span>输入禁言时长：</span>\n" +
        "                    <input type=\"text\" data-role=\"banTime\" maxlength=\"3\" >\n" +
        "                    <span>天</span>\n" +
        "                </form>\n" +
        "            </div>\n" +
        "            <div class=\"fd_button\">\n" +
        "                <a href=\"javascript:;\" data-role=\"cancel\" class=\"cancel\">取消</a>\n" +
        "                <a href=\"javascript:;\" data-role=\"confirm\" class=\"confirm\">确定</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    var admit_alert = "<div class=\"adm_alert\">\n" +
        "        <div class=\"adm_form\">\n" +
        "            <h3>确定解禁？</h3>\n" +
        "            <div class=\"fd_button\">\n" +
        "                <a href=\"javascript:;\" data-role=\"cancel\" class=\"cancelB\">取消</a>\n" +
        "                <a href=\"javascript:;\" data-role=\"confirm\" class=\"confirmB\">确定</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    $(".users_info").on("click",".ban",function () {
        // console.log( $(this).parents(".usersInfo_content"));
        $(this).parents(".usersInfo_content").append(ban_alert);
    });
    //取消
    $(".users_info").on("click",".cancel",function () {
        var a = $(".adm_container .adm_alert");
         a.remove();
    });
//    确定
    $(".users_info").on("click",".confirm",function () {
        var right = /[1-9]\d*/;
         var a = $(this).parents(".usersInfo_content").children(".users_right");
         var b = $(".adm_container .adm_alert");
         //获取禁言时间
         var time = $(this).parents(".adm_form").children(".ban_time").find("input").val();
         var p = $(this).parents(".adm_form").children(".ban_time");
        var p_content_empty = '<p>'+ "提示：请输入禁止时间"+"</p>";
        var p_content_wrong = '<p>'+ "提示：请输入正整数"+"</p>";
         if (time != ""){
            if (time.match(right)){
                console.log("OK");
                a.empty();
                var timeHtml = '<ul> ' +
                    '<li class="banOK">' +
                    '<a href="javascript:;"><i class="fa fa-fw fa-check-square"></i>已禁止：</a>' +
                    '<span class="banTime_num">' + time + '</span>'+'天' +
                    '</li> ' +
                    '</ul>';
                a.append(timeHtml);
                var c = $(this).parents(".usersInfo_content");
                b.remove();
                var alert_box= alertBox("禁止成功");
                // console.log();
                c.append(alert_box);
                c.children(".alert_info").fadeOut(2000);
            }else {
                p.find("p").remove();
                p.append(p_content_wrong);
            }
         }else {
             p.find("p").remove();
             p.append(p_content_empty);
         }

    });
//    取消禁止
    $(".users_info").on("click",".banOK",function () {
        var a = $(this).parents(".usersInfo_content");
        a.append(admit_alert);
    });
    //取消
    $(".users_info").on("click",".cancelB",function () {
        var a = $(".adm_container .adm_alert");
        a.remove();
    });
//    确定
    $(".users_info").on("click",".confirmB",function () {
        var a = $(this).parents(".usersInfo_content").children(".users_right");
        var b = $(".adm_container .adm_alert");
        a.empty();
        var banHtml = '<ul> ' +
            '<li class="ban">' +
            '<a href="javascript:;"><i class="fa fa-fw fa-ban"></i>禁止此用户</a>' +
            '</li> ' +
            '</ul>';
        a.append(banHtml);
        var c = $(this).parents(".usersInfo_content");
        b.remove();
        var alert_box= alertBox("解禁成功");
        c.append(alert_box);
        c.children(".alert_info").fadeOut(2000);
    });
//    -----------
//    删除漫画部分
//    -----------
    var comic_alert = "<div class=\"adm_alert\">\n" +
        "        <div class=\"adm_form\">\n" +
        "            <h3>确定删除此漫画？</h3>\n" +
        "            <div class=\"fd_button\">\n" +
        "                <a href=\"javascript:;\" data-role=\"cancel\" class=\"cancelB\">取消</a>\n" +
        "                <a href=\"javascript:;\" data-role=\"confirm\" class=\"confirmB\">确定</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    $('.comic_content').on("click",".comic_control",function (){
        $(this).parents(".per_comic").append(comic_alert);
    });
    $(".per_comic").on("click",".cancelB",function () {
       $(this).parents(".adm_alert").remove();
    });
    $(".per_comic").on("click",".confirmB",function () {
        var comic_alert = alertBox("删除成功");
        var a = $(this).parents(".comic_content");
        $(this).parents(".per_comic").remove();
        a.append(comic_alert);
        a.children(".alert_info").fadeOut(2000);
    });

//    修改电影电视剧的信息
//    获取先前信息,点击修改
    $(".adm_video .adm_movies").on("click",".change_info",function () {
        //获取当前电影的名字
        var name = $(this).parents(".video_detail").children("h5").text();
        //获取当前所有信息
        var info_main = $(this).parents(".video_detail").children(".more_detail").children();
        //得到简介
        var summery = $(info_main[4]).children("p").text();
        //得到filed
        var field = $(info_main[3]).children("span").text();
        // console.log(summery);
        // console.log(name);
        // console.log(info_main);
        var change_alert = '<div class=\"adm_alert\">\n' +
            '<div class=\"adm_form\">\n' +
            '<h3>修改电影信息</h3>\n' +
            "<div class=\"movie_infoC\">\n" +
            "  <form action=\"\">\n" +
            "    <div class=\"detail\">\n" +
            "      <i>名称：</i><input type=\"text\" data-role=\"movie_name\" value="+name+">\n" +
            "    </div>\n" +
            "    <div class=\"detail\">\n" +
            "      <i>简介：</i><input type=\"text\" data-role=\"movie_summery\" value="+summery+">\n" +
            "    </div>\n" +
            "    <div class=\"detail\">\n" +
            "      <i>field：</i><input type=\"text\" data-role=\"movie_field\" value="+field+">\n" +
            "     </div>\n" +
            "  </form>\n" +
            "</div>\n" +
            " <div class=\"fd_button\">\n" +
            "   <a href=\"javascript:;\" data-role=\"cancel\" class=\"cancelB\">取消</a>\n" +
            "   <a href=\"javascript:;\" data-role=\"confirm\" class=\"confirmB\">确定</a>\n" +
            " </div>" +
            "</div>";
        $(this).parents(".per_video").append(change_alert);
    });
//    取消修改信息
    $(".adm_video .adm_movies .per_video").on("click",".cancelB",function () {
        // console.log($(this));
        $(this).parents(".adm_alert").remove();
    });
//    确定修改信息
    $(".adm_video .adm_movies .per_video").on("click",".confirmB",function () {
        // console.log($(this));
        var change_info = $(this).parents(".adm_form").children(".movie_infoC").children().children();
        var detail = $(this).parents(".per_video").children(".video_detail").children(".more_detail").children();
        var detail_name = $(this).parents(".per_video").children(".video_detail").children("h5");
        //    获取修改后的信息
        var _name = $(change_info[0]).children("input").val();
        var _summery = $(change_info[1]).children("input").val();
        var _field = $(change_info[2]).children("input").val();
        // console.log(_summery);
        // console.log(_name);
        // console.log(_field);
        console.log(detail);
        detail_name.text(_name);
        $(detail[3]).children("span").text(_field);
        $(detail[4]).children("p").text(_summery);
        var c = $(this).parents(".per_video");
        $(this).parents(".adm_alert").remove();
        var alert_box= alertBox("修改成功");
        c.append(alert_box);
        c.children(".alert_info").fadeOut(2000);
    });
//    电视剧修改
    $(".adm_video .adm_shows").on("click",".change_info",function () {
        //获取当前电影的名字
        var name = $(this).parents(".video_detail").children("h5").text();
        //获取当前所有信息
        var info_main = $(this).parents(".video_detail").children(".more_detail").children();
        //得到简介
        var summery = $(info_main[4]).children("p").text();
        //得到filed
        var field = $(info_main[3]).children("span").text();
        // console.log(summery);
        // console.log(name);
        // console.log(info_main);
        var change_alert = '<div class=\"adm_alert\">\n' +
            '<div class=\"adm_form\">\n' +
            '<h3>修改电影信息</h3>\n' +
            "<div class=\"movie_infoC\">\n" +
            "  <form action=\"\">\n" +
            "    <div class=\"detail\">\n" +
            "      <i>名称：</i><input type=\"text\" data-role=\"movie_name\" value="+name+">\n" +
            "    </div>\n" +
            "    <div class=\"detail\">\n" +
            "      <i>简介：</i><input type=\"text\" data-role=\"movie_summery\" value="+summery+">\n" +
            "    </div>\n" +
            "    <div class=\"detail\">\n" +
            "      <i>field：</i><input type=\"text\" data-role=\"movie_field\" value="+field+">\n" +
            "     </div>\n" +
            "  </form>\n" +
            "</div>\n" +
            " <div class=\"fd_button\">\n" +
            "   <a href=\"javascript:;\" data-role=\"cancel\" class=\"cancelB\">取消</a>\n" +
            "   <a href=\"javascript:;\" data-role=\"confirm\" class=\"confirmB\">确定</a>\n" +
            " </div>" +
            "</div>";
        $(this).parents(".per_video").append(change_alert);
    });
//    取消修改信息
    $(".adm_video .adm_shows .per_video").on("click",".cancelB",function () {
        // console.log($(this));
        $(this).parents(".adm_alert").remove();
    });
//    确定修改信息
    $(".adm_video .adm_shows .per_video").on("click",".confirmB",function () {
        // console.log($(this));
        var change_info = $(this).parents(".adm_form").children(".movie_infoC").children().children();
        var detail = $(this).parents(".per_video").children(".video_detail").children(".more_detail").children();
        var detail_name = $(this).parents(".per_video").children(".video_detail").children("h5");
        //    获取修改后的信息
        var _name = $(change_info[0]).children("input").val();
        var _summery = $(change_info[1]).children("input").val();
        var _field = $(change_info[2]).children("input").val();
        // console.log(_summery);
        // console.log(_name);
        // console.log(_field);
        console.log(detail);
        detail_name.text(_name);
        $(detail[3]).children("span").text(_field);
        $(detail[4]).children("p").text(_summery);
        var c = $(this).parents(".per_video");
        $(this).parents(".adm_alert").remove();
        var alert_box= alertBox("修改成功");
        c.append(alert_box);
        c.children(".alert_info").fadeOut(2000);
    })

});
