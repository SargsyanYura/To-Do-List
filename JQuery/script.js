$(function(){


    $("button").click(function(){

        var list = $("#list").val()

        $("ul").append("<li>" + list + "</li>")

        $("#list").val("")

    })
    $("ul").on("click","li",function(){
        $(this).remove()
    })


})

