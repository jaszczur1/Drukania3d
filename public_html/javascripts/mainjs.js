/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#home-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#home-nav").offset().top + 100
        }, 2000);
    });


    $("#portfolio-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio-div").offset().top - 100
        }, 2000);
    });

    $("#about-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-div").offset().top
        }, 1000);
    });

    $("#contact-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact-div").offset().top
        }, 800);
    });
    
    $("#home-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#firstPage").offset().top-100
        }, 500);
    });
    
    
     $("#Drukarnia-3D").click(function () {
        $('html, body').animate({
            scrollTop: $("#firstPage").offset().top-100
        }, 500);
    });
    
    

    var email = [];
    var check_point;
    var postion_dot;
    $("#inputHorizontalSuccessEmail").keypress(function (e) {
//        console.log(String.fromCharCode(e.keyCode));
        email.push(String.fromCharCode(e.keyCode));

        for (var i = 0; i < email.length; i++) {
            console.log(email);
            if (email[i] == '@' && i > 0)
                check_point = true; // bool position @            
            if (check_point == true && email[i] == '.') {
                postion_dot = i;
            }
            if (postion_dot < i)
                $('#add-class-for-email').addClass('has-success');
            //    $('#add-class-for-email').removeClass('.has-success');
        }
    });
    $('#portfolio-img0').click(function () {
        
         event.preventDefault();         
         $('#dialog').append('<img src="images/luaszek_mini.jpg">');
         
        $("#dialog").dialog({
            height: 800,
            width : 800,
            title: "Dialog Title",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        $(this).dialog("close");
                       // $(this).dialog("destroy");
                    }
                }
            ], 
        });
    });
});




        