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

        $('#dialog').append('<img src="images/3d/temp0.jpg" class="img-script">');

        $("#dialog").dialog({

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
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }
            ],
        });
    });

    $('#portfolio-img1').click(function () {

        $('#dialog0').append('<img src="images/3d/temp1.jpg" class="img-script">  <br><br>  <div>- Materiał: PLA (niebieska), ABS (czerwona)</div>\n\
 <div>- Wysokość warstwy 0,2 mm</div>\n\
 <div> - Wypełnienie 25%</div>');

        $("#dialog0").dialog({

//            open: function () {
//                var markup = 'Hello World';
//                $(this).html(markup);
//            },
            width: 800,
            height: 650,
            title: "Dialog Title",
            dialogClass: "no-close",
//            buttons: [
//                {
//                    text: "OK",
//                    click: function () {
//                    //    $(this).dialog("close");
//                        $(this).dialog("destroy");
//                    }
//                }
//            ],
        });
    });

    $('#portfolio-img2').click(function () {

        event.preventDefault();
        $('#dialog').append('<img src="images/3d/temp2.jpg" class="img-script">');

        $("#dialog").dialog({
            width: 800,
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
            width: 800,
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
            width: 800,
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
            width: 800,
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




    $('#contact-nav').click(function () {


        event.preventDefault();


        $('#dialog').append('<div class="form-group row" id="add-class-for-email">\n\
<label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Email</label>\n\
<div class="col-md-10">\n\
 <input type="email" class="form-control form-control-success" id="inputHorizontalSuccessEmail" placeholder="name@example.com">\n\
 <div class="form-control-feedback">Ok email.</div>\n\
  </div>\n\
  </div>\n\
\n\
<div class="form-group row">\n\
<label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Numer tel</label>\n\
<div class="col-md-10">\n\
<input type="tel" class="form-control form-control-success" id="inputHorizontalSuccess_telephone">\n\
 <div class="form-control-feedback">Success! You heve done it.</div>\n\
</div>\n\
</div>\n\
</div>\n\
<div class="form-group">\n\
<label for="comment">Wiadomość:</label>\n\
<textarea class="form-control" rows="5" id="comment"></textarea>\n\
 </div>\n\
\n\
<button class="btn btn-primary">Wyslij</button>')

        $("#dialog").dialog({
            width: 800,
            height: 450,
            title: "Dialog Title",
            dialogClass: "no-close",

        });
    });



});




        