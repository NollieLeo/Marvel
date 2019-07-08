$(function () {
    //选项卡弹出页面
    
    $('.m_movieone li').click(function(){
        $('.gtx').eq($(this).index()).css('display','block');
        $('.m_movienr').css('display','none');
        $('.m_moviecont').css('background-image','url(img/movie_bj.jpg)')
        $('.gb').click(function(){
            $('.gtx').css('display','none');
            $('.m_movietwo').css('display','none');
            $('.m_movieone').css('display','block');
            $('.m_moviecont').css('background-image','url(img/movie_bj-1.jpg)')
        })
    });
    $('.m_movietwo li').click(function(){
        $('.gtx').eq($(this).index()+6).css('display','block');
        $('.m_movienr').css('display','none');
        $('.m_moviecont').css('background-image','url(img/movie_bj.jpg)')
        $('.gb').click(function(){
            $('.gtx').css('display','none');
            $('.m_movieone').css('display','none');
            $('.m_movietwo').css('display','block');
            $('.m_moviecont').css('background-image','url(img/movie_bj-1.jpg)')
        })
    })
});
window.onload= function () {
    //选项卡
    var m_moviecont=document.querySelector('.m_moviecont');
    var lis=document.querySelectorAll('.m_moviejd li');
    var uls=document.querySelectorAll('.m_contwrap ul');
    var gtxs=document.querySelectorAll('.gtx');
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            m_moviecont.style.backgroundImage='url(img/movie_bj-1.jpg)';
            for(var a=0; a<gtxs.length;a++){
                gtxs[a].style.display="none";
            }
            for(var n=0;n<lis.length;n++){
                lis[n].style.color="white";
                lis[n].style.borderBottom="6px solid transparent";
            }
            for(var j=1;j<uls.length;j++){
                uls[j].style.display='none';
            }
            this.style.color="#f32b1c";
            this.style.borderBottom="6px solid #f32b1c";
            uls[this.index+1].style.display='block';
        }
    }
    //登陆注册
    // $(".sign_in_click").click(function () {
    //     $("#sign_in_panel").css("display","block");
    // });
};