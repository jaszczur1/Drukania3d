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
         $('#dialog').append('<img src="images/3d/temp0.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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
    
    $('#portfolio-img1').click(function () {
       
         event.preventDefault();         
         $('#dialog').append('<img src="images/3d/temp1.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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
    
    $('#portfolio-img2').click(function () {
       
         event.preventDefault();         
         $('#dialog').append('<img src="images/3d/temp2.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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
    
    $('#portfolio-img3').click(function () {
       
         event.preventDefault();         
         $('#dialog').append('<img src="images/3d/temp3.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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
    
    
    $('#portfolio-img4').click(function () {
       
         event.preventDefault();         
         $('#dialog').append('<img src="images/3d/temp4.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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
    
    
    $('#portfolio-img5').click(function () {
       
         event.preventDefault();         
         $('#dialog').append('<img src="images/3d/temp5.jpg" class="img-script">');
         
        $("#dialog").dialog({
            width : 800,
            height: 650,
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




        