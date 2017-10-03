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
            scrollTop: $("#portfolio-div").offset().top - 120
        }, 2000);
    });

    $("#about-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-div").offset().top
        }, 1000);
    });

//    $("#contact-nav").click(function () {
//        $('html, body').animate({
//            scrollTop: $("#contact-div").offset().top
//        }, 800);
//    });

    $("#home-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#firstPage").offset().top - 100
        }, 500);
    });


//    $("#Drukarnia-3D").click(function () {
//        $('html, body').animate({
//            scrollTop: $("#firstPage").offset().top - 100
//        }, 500);
//    });


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

        $('#dialog0').append('<div id="to-remove"> <img src="images/3d/temp0.jpg" class="img-script"><div>tu piszesz text do zabona</div></div>');

        $("#dialog0").dialog({

            draggable: false,
            modal: true,
            show: {
                effect: "blind",
                duration: 600
            },
            hide: {
                effect: "explode",
                duration: 400
            },

            width: 800,
            height: 650,
            title: "zabon",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        $('#to-remove').remove();
                        $(this).dialog("destroy");

                    }
                }
            ],
        });
    });

    $('#portfolio-img1').click(function () {

        $('#dialog1').append('<div id="to-remove"> <img src="images/3d/temp1.jpg" class="img-script"><div>tu piszesz text do czacha</div></div>');

        $("#dialog1").dialog({

//            open: function () {
//                var markup = 'Hello World';
//                $(this).html(markup);
//            },

            draggable: false,
            modal: true,
            width: 800,
            height: 650,
            title: "Dialog Title",
            dialogClass: "no-close",
           buttons: [
               {
                   text: "OK",
                   click: function () {
                   //    $(this).dialog("close");
                       $(this).dialog("destroy");
                       $('#to-remove').remove();
                   }
               }
           ],
        });
    });

    $('#portfolio-img2').click(function () {

        $('#dialog2').append('<div id="to-remove"> <img src="images/3d/temp2.jpg" class="img-script"><div>tu piszesz text do zabona</div></div>');

        $("#dialog2").dialog({
            draggable: false,
            modal: true,
            width: 800,
            height: 650,
            title: "Dialog Title",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        $('#to-remove').remove();
                         $(this).dialog("destroy");
                    }
                }
            ],
        });
    });

    $('#portfolio-img3').click(function () {

        $('#dialog3').append('<div id="to-remove"> <img src="images/3d/temp3.jpg" class="img-script"><div>tu piszesz text do koła</div></div>');

        $("#dialog3").dialog({

            draggable: false,
            modal: true,
            width: 800,
            height: 650,
            title: "Dialog Title",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        $('#to-remove').remove();
                         $(this).dialog("destroy");
                    }
                }
            ],
        });
    });


    $('#portfolio-img4').click(function () {

        $('#dialog4').append('<div id="to-remove"> <img src="images/3d/temp4.jpg" class="img-script"><div>tu piszesz text do kołeczka</div></div>');

        $("#dialog4").dialog({
            draggable: false,
            modal: true,
            width: 800,
            height: 650,
            title: "Advent!!Adven-teszek",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                       // $(this).dialog("close");
                         $(this).dialog("destroy");
                        $('#to-remove').remove();
                    }
                }
            ],
        });
    });


    $('#portfolio-img5').click(function () {

        $('#dialog5').append('<div id="to-remove"> <img src="images/3d/temp5.jpg" class="img-script"><div>krecimy dalej sróbeczki w Advanteszku</div></div>');

        $("#dialog5").dialog({
            draggable: false,
            modal: true,
            width: 800,
            height: 650,
            title: "Dialog Title",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "OK",
                    click: function () {
                       // $(this).dialog("close");
                         $(this).dialog("destroy");
                        $('#to-remove').remove();
                    }
                }
            ],
        });
    });




    $('#quotation-nav').click(function () {

        $('#quotation').append('tekst bedziesz pisał w pliku mainjs.js');

        //
        // $('#dialog-email').append('to bedziesz pisał')
//         <div class="form-group row" id="add-class-for-email">\n\
// <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Email</label>\n\
// <div class="col-md-10">\n\
//  <input type="email" class="form-control form-control-success" id="inputHorizontalSuccessEmail" placeholder="name@example.com">\n\
//  <div class="form-control-feedback">Ok email.</div>\n\
//   </div>\n\
//   </div>\n\
// \n\
// <div class="form-group row">\n\
// <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Numer tel</label>\n\
// <div class="col-md-10">\n\
// <input type="tel" class="form-control form-control-success" id="inputHorizontalSuccess_telephone">\n\
//  <div class="form-control-feedback">Success! You heve done it.</div>\n\
// </div>\n\
// </div>\n\
// </div>\n\
// <div class="form-group">\n\
// <label for="comment">Wiadomość:</label>\n\
// <textarea class="form-control" rows="5" id="comment"></textarea>\n\
//  </div>\n\
// \n\
// <button class="btn btn-primary">Wyslij</button>')

        $("#quotation").dialog({
            width: 800,
            height: 450,
            title: "Dialog Title",
            dialogClass: "no-close",

        });
    });



});




        