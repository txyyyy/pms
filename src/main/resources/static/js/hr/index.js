$(document).ready(function () {
    var userId=$("#userId").val();

    $.ajax({
        url : "/employee/getMyName?userId="+userId,     //后台请求的数据
        async : true,                   //是否异步请求
        success : function(data) {      //如果请求成功，返回数据。
            $("#myMsg").text(data.userName);
            $("#my_msg").attr("href","/hr/getMyMsg?userId="+data.userId);
            $("#my_qingjia").attr("href","/hr/all_qingjia?userId="+data.userId);
            $("#my_kaoqing").attr("href","/hr/all_del?userId="+data.userId);
            $("#my_jx").attr("href","/hr/all_add?userId="+data.userId);
        },
    });
    document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px';

});
